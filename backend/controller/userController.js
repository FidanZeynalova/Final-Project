const express = require("express")
const UsersModel = require("../model/userModel")
const app = express()
app.use(express.json())
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
require("dotenv").config()
const secretKey = process.env.SECRET_KEY


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS
    },
    secure: true,
});

let UsersController = {
    // Bütün İstifadəçiləri gətir
    getAllUsers: async (req, res) => {
        try {
            let users = await UsersModel.find()
            res.send(users)
        } catch (error) {
            res.send({ message: "Daxili Server Xətası", error: error.message })
        }
    },
    // İstifadəçini ID ilə gətir
    getUserById: async (req, res) => {
        let { id } = req.params
        try {
            let userById = await UsersModel.findById(id)
            if (!userById) {
                return res.send({ message: "User not found" });

            }
            res.send(userById)
        } catch (error) {
            res.send({ message: "Internal Server Error", error: error.message });

        }
    },
    //  qeydiyyat
    registerUser: async (req, res) => {
        const { email, firstname, lastname, age, password, confirmpassword } = req.body;
        try {
            const user = await UsersModel.findOne({ email: email });

            if (user) {
                return res.send({ message: "This user already exists" });

            }
            if (password !== confirmpassword) {
                return res.send({ message: "Passwords do not match!" });

            }

            // Şifrənin hash-lənməsi
            let hashpassword = await bcrypt.hash(password, 10);

            // Yeni istifadəçi yaradlması
            let newUser = new UsersModel({
                firstname,
                lastname,
                age,
                password: hashpassword,
                email
            });

            await newUser.save();
            res.send(newUser);
        } catch (error) {
            res.send({ message: "Internal Server Error", error: error.message });
        }
    },

    loginUser: async (req, res) => {
        let { email, password } = req.body
        try {
            const user = await UsersModel.findOne({ email: email })
            if (!user) {
                return res.send({ message: "User is not registered" });

            } else {
                let isTruePassword = await bcrypt.compare(password, user.password)
                if (!isTruePassword) {
                    return res.send({ message: "Incorrect password" });

                } else {
                    let confirmCode = Math.floor(100000 + Math.random() * 999999)
                    user.confirmPassword = confirmCode
                    await user.save()
                    const info = await transporter.sendMail({
                        from: '"Fidan Zeynalova 👻" <fidanhz-af206@code.edu.az>',
                        to: user.email,
                        subject: "Salam ✔",
                        text: "Salam dünya?",
                        html: `Bu sizin login təsdiq kodunuzdur: ${confirmCode}`,
                    });
                    res.send(user)
                }
            }
        } catch (error) {
            res.send({ message: "Internal Server Error", error: error.message });

        }
    },
    confirmPasswordUser: async (req, res) => {
        let { email, confirmPassword } = req.body;
        try {
            let user = await UsersModel.findOne({ email });

            if (!user) {
                return res.status(404).send({ message: "User not found" });

            }
            if (confirmPassword) {
                if (user.confirmPassword !== confirmPassword) {
                    return res.status(400).send({ message: "The confirmation code is incorrect" });

                }

                let token = jwt.sign(
                    { userId: user._id, email: user.email },
                    secretKey,
                    { expiresIn: "1h" }
                );
                return res.send({ token });
            }
            return res.send({ confirmPassword: user.confirmPassword });
        } catch (error) {
            res.send({ message: "Internal Server Error", error: error.message });

        }
    }
}

module.exports = UsersController
