const express = require("express")
const UsersModel = require("../model/userModel")
const app = express()
app.use(express.json())
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const secretKey = "secretKey"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user:"fidanhz-af206@code.edu.az",
        pass: "pbas ewbb vfbx lwtp"
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
                return res.send({ message: "İstifadəçi tapılmadı" })
            }
            res.send(userById)
        } catch (error) {
            res.send({ message: "Daxili Server Xətası", error: error.message })
        }
    },
    // İstifadəçi qeydiyyat
    registerUser: async (req, res) => {
        const { email, firstName, lastName, age, password } = req.body
        try {
            const user = await UsersModel.find({ email: email })
            if (user.length !== 0) {
                return res.send({ message: "Bu İstifadəçi artıq mövcuddur" })
            } else {
                let hashpassword = await bcrypt.hash(password, 10);
                let newUser = new UsersModel({
                    firstName,
                    lastName,
                    age,
                    password: hashpassword,
                    email
                })

                await newUser.save()
                res.send(newUser)
            }
        } catch (error) {
            res.send({ message: "Daxili Server Xətası", error: error.message })
        }
    },
    loginUser: async (req, res) => {
        let { email, password } = req.body
        try {
            const user = await UsersModel.findOne({ email: email })
            if (!user) {
                return res.send({ message: "İstifadəçi qeydiyyatdan keçməyib" })
            } else {
                let isTruePassword = await bcrypt.compare(password, user.password)
                if (!isTruePassword) {
                    return res.send({ message: "Şifrə yanlışdır" })
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
            res.send({ message: "Daxili Server Xətası", error: error.message })
        }
    },
    confirmPasswordUser: async (req, res) => {
        let confirmPassword = req.body.confirmPassword
        try {
            let user = await UsersModel.findOne({ confirmPassword: confirmPassword })
            if (!user) {
                return res.send({ message: "Təsdiq kodu yanlışdır" })
            } else {
                let token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: "1h" })
                res.send(token)
            }
        } catch (error) {
            res.send({ message: "Daxili Server Xətası", error: error.message })
        }
    }
}

module.exports = UsersController
