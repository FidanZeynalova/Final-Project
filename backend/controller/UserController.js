const express = require("express");
const UserModel = require("../model/UserModel");
const app = express();
app.use(express.json());

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            let users = await UserModel.find();
            res.send(users);
        } catch (error) {
            res.status(500).send({ message: "Error fetching users", error: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            let { id } = req.params;
            let user = await UserModel.findById(id);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }
            res.send(user);
        } catch (error) {
            res.status(500).send({ message: "Error fetching user by ID", error: error.message });
        }
    },

    addUser: async (req, res) => {
        try {
            let newUser = new UserModel(req.body);
            await newUser.save();
            res.send({
                message: "Success! User Added",
                data: newUser
            });
        } catch (error) {
            res.status(500).send({ message: "Error adding user", error: error.message });
        }
    },

    deleteUserById: async (req, res) => {
        try {
            let { id } = req.params;
            let deletedUser = await UserModel.findByIdAndDelete(id);
            if (!deletedUser) {
                return res.status(404).send({ message: "User not found" });
            }
            res.send({ message: "Success! User Deleted" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting user", error: error.message });
        }
    },

    editUserById: async (req, res) => {
        try {
            let { id } = req.params;
            let updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedUser) {
                return res.status(404).send({ message: "User not found" });
            }
            res.send({
                message: "Success! User Updated",
                data: updatedUser
            });
        } catch (error) {
            res.status(500).send({ message: "Error updating user", error: error.message });
        }
    },
};

module.exports = UserController;
