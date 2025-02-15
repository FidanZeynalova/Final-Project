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
                return res.send({ message: "Bu email ilə istifadəçi tapılmadı" });
            }

            const confirmCode = Math.floor(100000 + Math.random() * 999999);

            const info = await transporter.sendMail({
                from: '"Fidan Zeynalova 👻" <fidanhz-af206@code.edu.az>',
                to: user.email,
                subject: "Salam ✔",
                text: "Salam dünya?",
                html: `Bu sizin login təsdiq kodunuzdur: ${confirmCode}`,
            });

            user.confirmPassword = confirmCode;
            await user.save();

            res.send({ message: "Təsdiq kodu emailə göndərildi" });

        } catch (error) {
            res.send({ message: "Daxili Server Xətası", error: error.message });
        }
    },

    verifyCode: async (req, res) => {
        const { email, confirmCode } = req.body;
        try {
            let user = await UsersModel.findOne({ email: email });

            if (!user || user.confirmPassword !== confirmCode) {
                return res.send({ message: "Təsdiq kodu yanlışdır" });
            }


            res.send({ message: "Kod düzgün, yeni şifrə təyin edə bilərsiniz" });

        } catch (error) {
            res.send({ message: "Daxili Server Xətası", error: error.message });
        }
    },

    updatePassword: async (req, res) => {
        const { email, newPassword } = req.body;
        try {
            let user = await UsersModel.findOne({ email: email });
    
            if (!user) {
                return res.status(404).send({ message: "Bu email ilə istifadəçi tapılmadı" });
            }
    
            const hashedPassword = await bcrypt.hash(newPassword, 10);
    
            let updatedUser = await UsersModel.findByIdAndUpdate(
                user._id, 
                { password: hashedPassword }, 
                { new: true } 
            );
    
            if (!updatedUser) {
                return res.status(400).send({ message: "Şifrə yenilənmədi" });
            }
    
            res.send({ message: "Şifrə uğurla yeniləndi" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Daxili Server Xətası", error: error.message });
        }
    }
    
};

module.exports = UsersLostPasswordController;
