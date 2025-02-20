const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const UsersModel = require("../model/userModel");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS
    },
    secure: true,
});

let UsersLostPasswordController = {
    forgotPassword: async (req, res) => {
        const { email } = req.body;
        try {
            let user = await UsersModel.findOne({ email: email });

            if (!user) {
                return res.send({ message: "No user found with this email" });
            }

            const confirmCode = Math.floor(100000 + Math.random() * 900000);

            const info = await transporter.sendMail({
                from: '"Fidan Zeynalova 👻" <fidanhz-af206@code.edu.az>',
                to: user.email,
                subject: "Salam ✔",
                text: "Salam dünya?",
                html: `Bu sizin login təsdiq kodunuzdur: ${confirmCode}`,
            });

            user.confirmPassword = confirmCode;
            await user.save();

            res.send({ message: "Confirmation code sent to email" });

        } catch (error) {
            res.send({ message: "Internal Server Error", error: error.message });
        }
    },

    verifyCode: async (req, res) => {
        const { email, confirmCode } = req.body;
        try {
            let user = await UsersModel.findOne({ email: email });

            if (!user || user.confirmPassword !== confirmCode) {
                return res.send({ message: "Incorrect confirmation code" });
            }

            res.send({ message: "Code is correct, you can set a new password" });

        } catch (error) {
            res.send({ message: "Internal Server Error", error: error.message });
        }
    },

    updatePassword: async (req, res) => {
        const { email, newPassword } = req.body;
        try {
            let user = await UsersModel.findOne({ email: email });

            if (!user) {
                return res.status(404).send({ message: "No user found with this email" });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            user.password = hashedPassword;
            await user.save();

            res.send({ message: "Password successfully updated" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Internal Server Error", error: error.message });
        }
    }
    
};

module.exports = UsersLostPasswordController;
