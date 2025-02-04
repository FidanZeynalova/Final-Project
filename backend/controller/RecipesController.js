const express = require("express");
const RecipeModel = require("../model/RecipesModel");
const app = express();
app.use(express.json());

const RecipeController = {
    getAllRecipes: async (req, res) => {
        try {
            let recipes = await RecipeModel.find();
            res.send(recipes);
        } catch (error) {
            res.status(500).send({ message: "Error fetching recipes", error: error.message });
        }
    },
    getRecipeById: async (req, res) => {
        try {
            let { id } = req.params;
            let recipeById = await RecipeModel.findById(id);
            if (!recipeById) {
                return res.status(404).send({ message: "Recipe not found" });
            }
            res.send(recipeById);
        } catch (error) {
            res.status(500).send({ message: "Error fetching recipe by ID", error: error.message });
        }
    },
    addRecipe: async (req, res) => {
        try {
            let newRecipe = new RecipeModel(req.body);
            await newRecipe.save();
            res.send({
                message: "Success! Recipe Added",
                data: req.body
            });
        } catch (error) {
            res.status(500).send({ message: "Error adding recipe", error: error.message });
        }
    },
    deleteRecipeById: async (req, res) => {
        try {
            let { id } = req.params;
            let deletedRecipe = await RecipeModel.findByIdAndDelete(id);
            if (!deletedRecipe) {
                return res.status(404).send({ message: "Recipe not found" });
            }
            res.send({ message: "Success! Recipe Deleted" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting recipe", error: error.message });
        }
    },
    editRecipeById: async (req, res) => {
        try {
            let { id } = req.params;
            let editedRecipe = await RecipeModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!editedRecipe) {
                return res.status(404).send({ message: "Recipe not found" });
            }
            res.send({
                message: "Success! Recipe Updated",
                data: editedRecipe
            });
        } catch (error) {
            res.status(500).send({ message: "Error updating recipe", error: error.message });
        }
    },
};

module.exports = RecipeController;
