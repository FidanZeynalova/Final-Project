const express = require("express")
const RecipesModel = require("../model/recipesModel")
const app = express()
app.use(express.json())


const RecipesController = {
    getAllRecipes: async (req, res) => {
        try {
            let allRecipes = await RecipesModel.find();
            res.status(200).json(allRecipes);
        } catch (error) {
            res.status(500).json({ message: "An error occurred!" });
        }
    },
    getAllChefRecipes: async (req, res) => {
        let { id } = req.params
        let recipes = await RecipesModel.find({ chefById: id });
        if (recipes.length === 0) {
            return res.status(404).json({ message: "No recipes found for this chef!" });
        }
        res.send(recipes);

    },
    getRecipeById: async (req, res) => {
        try {
            let { id } = req.params;
            let recipeById = await RecipesModel.findById(id);

            if (!recipeById) {
                return res.status(404).json({ message: "Recipe not found!" });
            }

            res.status(200).json(recipeById);
        } catch (error) {
            res.status(500).json({ message: "An error occurred!" });
        }
    },

    deleteRecipe: async (req, res) => {
        try {
            let { id } = req.params;
            const deletedRecipe = await RecipesModel.findByIdAndDelete(id);

            if (!deletedRecipe) {
                return res.status(404).json({ message: "Recipe not found!" });
            }

            res.status(200).json({ message: "Recipe deleted successfully!", recipe: deletedRecipe });
        } catch (error) {
            res.status(500).json({ message: "An error occurred!" });
        }
    },

    createRecipe: async (req, res) => {
        try {
            const { dish, chefById, prepTime, cookingTime, totalTime, servings, calories, ingredients, instructions, img, rating } = req.body;

            const newRecipe = new RecipesModel({
                dish,
                chefById,
                prepTime,
                cookingTime,
                totalTime,
                servings,
                calories,
                ingredients,
                instructions,
                img,
                rating
            });

            await newRecipe.save();
            res.status(201).json({ message: "New recipe created successfully!", recipe: newRecipe });
        } catch (error) {
            res.status(500).json({ message: "An error occurred!" });
        }
    },

    updateRecipe: async (req, res) => {
        try {
            let { id } = req.params;
            const updatedRecipe = await RecipesModel.findByIdAndUpdate(id, req.body, { new: true });

            if (!updatedRecipe) {
                return res.status(404).json({ message: "Recipe not found!" });
            }

            res.status(200).json({ message: "Recipe updated successfully!", recipe: updatedRecipe });
        } catch (error) {
            res.status(500).json({ message: "An error occurred!" });
        }
    },

};

module.exports = RecipesController