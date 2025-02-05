const express = require("express");
const UserModel = require("../model/UserModel");
const app = express();
app.use(express.json()); // JSON formatında datanı işləmək üçün
const bcrypt = require('bcrypt'); // Şifrələmə üçün
const nodemailer = require("nodemailer"); // Email göndərmək üçün
const jwt = require('jsonwebtoken'); // Token yaratmaq üçün
const secretKey = process.env.JWT_SECRET || "SECRETKEY"; // JWT üçün gizli açar




const transporter = nodemailer.createTransport({
    direct: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {

    },
    secure: true,
});


const UserController = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await UserModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Error fetching users", error: error.message });
        }
    },

    // Get user by ID
    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error fetching user", error: error.message });
        }
    },

    // Register user
    register: async (req, res) => {
        try {
            const { email, username, password } = req.body;
            let normalizedEmail = email.toLowerCase()
            if (await UserModel.findOne({ email })) {
                res.status(400).json({ message: "User already exists" })
            };

            const hashedPassword = await bcrypt.hash(password, 10); //passwordu hash-lanır (daha safe olunması üçün)
            const newUser = new UserModel({ username, normalizedEmail, password: hashedPassword }); //passüord olarag hash-lanmış passwordu göndəririk
            await newUser.save();

            res.status(201).json({ message: "User registered successfully", user: newUser });
        } catch (error) {
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    },

    // Login user
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email });
            if (!user) return res.status(400).json({ message: "User not registered" });

            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                res.status(401).json({ message: "Invalid credentials" })
            };

            const confirmCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code
            user.confirmPassword = confirmCode;
            await user.save();

            await transporter.sendMail({
                to: user.email,
                subject: "Verification Code",
                html: `<h1>Your verification code is: ${confirmCode}</h1>`
            });

            res.status(200).json({ message: "Verification code sent" });
        } catch (error) {
            res.status(500).json({ message: "Login error", error: error.message });
        }
    },

    // Confirm user
    confirm: async (req, res) => {
        try {
            const { confirmPassword } = req.body;
            const user = await UserModel.findOne({ confirmPassword });
            if (!user) return res.status(400).json({ message: "Invalid confirmation code" });

            const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, { expiresIn: "1h" });
            res.status(200).json({ message: "User confirmed", token });
        } catch (error) {
            res.status(500).json({ message: "Confirmation error", error: error.message });
        }
    }
};

module.exports = UserController;
