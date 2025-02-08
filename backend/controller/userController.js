const express = require("express")
const UsersModel = require("../model/userModel")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    secure: true,
});

let UsersController = {
     // Get All Users
    getAllUsers: async (req, res) => {
        let users = await UsersModel.find()
        res.send(users)
    },
        // Get User By ID
    getUserById: async (req, res) => {
        let { id } = req.params
        // ObjectId yoxlanması
     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid user ID.");
    }

    let userById = await UsersModel.findById(id);
    if (!userById) {
        return res.status(404).send("User not found.");
    }
    res.send(userById);
    },
       // Register User
    registerUser: async (req, res) => {
        const { email, firstName, lastName, password, age } = req.body
        const user = await UsersModel.findOne({ email: email })
        if (user) {
            res.send("Bu user Var")
        } else {
            let hashPassword = await bcrypt.hash(password, 12);
            let newUser = UsersModel({
                firstName,
                lastName,
                age,
                email,
                password: hashPassword
            })
            await newUser.save()
            res.send(newUser)
        }
    },
    loginUser: async (req, res) => {
        let { email, password } = req.body
        const user = await UsersModel.findOne({ email: email })
        if (!user) {
            return res.send("BUuser Registerden kecmeyib")
        } else {
            let isTruePassword = await bcrypt.compare(password, user.password)
            if (!isTruePassword) {
                res.send("Password sehvdir")
            } else {
                let confirmCode = Math.floor(100000 + Math.random() * 999999)
                user.confirmPassword = confirmCode
                await user.save()
                const info = await transporter.sendMail({
                    from: '"Fidan Zeynalova 👻" <fidanhz-af206@code.edu.az>', // sender address
                    to: user.email, // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: `bu sizin login paroldur:${confirmCode}`, // html body
                });
                res.send(user)
            }
        }
    },
    confirmPasswordUser: async(req,res) =>{
        let {confirmPassword} = req.body
        let user = await UsersModel.findOne({confirmPassword : confirmPassword})
       if (!user) {
    return    res.status(400).send("Confirm password səhvdir");
       }else{
        return res.send("Successful");
       }
    } 
}

module.exports = UsersController