const express = require("express")
const ChefModel = require("../model/chefModel")
const RecipesModel = require("../model/recipesModel")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())

let ChefController = {
    getAllChef: async (req, res) => {
        try {
            const chefs = await ChefModel.find();
            res.status(200).json(chefs);
        } catch (error) {
            res.status(500).json({ message: "Error fetching chefs!" });
        }
    },

    getChefById: async (req, res) => {
        let { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Chef ID!" });
        }
        try {
            const chef = await ChefModel.findById(id);
            if (!chef) {
                return res.status(404).json({ message: "Chef not found!" });
            }
            res.status(200).json(chef);
        } catch (error) {
            res.status(500).json({ message: "Error fetching chef!" });
        }
    },

    addChef: async (req, res) => {
        try {
            const newChefData = {
                ...req.body,
                chefImg: req.file ? `http://localhost:5050/upload/${req.file.filename}` : null
            };

            let newChef = new ChefModel(newChefData);
            await newChef.save();
            res.status(201).json({
                message: "Successfully added new chef",
                data: newChef
            });
        } catch (error) {
            res.status(500).json({ message: "Error adding chef!" });
        }
    },

    deleteChef: async (req, res) => {
        let { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Chef ID!" });
        }
        try {
            const deletedChef = await ChefModel.findByIdAndDelete(id);
            if (!deletedChef) {
                return res.status(404).json({ message: "Chef not found!" });
            }
            await RecipesModel.deleteMany({ chefById: id });

            res.status(200).json({ message: "Chef deleted successfully!" });
        } catch (error) {
            res.status(500).json({ message: "An error occurred while deleting chef!" });
        }
    },

    editChef: async (req, res) => {
        let { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Chef ID!" });
        }
        try {
            const editedChef = await ChefModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!editedChef) {
                return res.status(404).json({ message: "Chef not found!" });
            }
            res.status(200).json({
                message: "Successfully edited chef",
                data: editedChef
            });
        } catch (error) {
            res.status(500).json({ message: "Error editing chef!" });
        }
    }
};

module.exports = ChefController;
