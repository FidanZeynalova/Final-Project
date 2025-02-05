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

    // Reytinq əlavə etmək və ya yeniləmək
    // rateRecipe: async (req, res) => {
    //     try {
    //         let { id } = req.params; // Reseptin ID-si
    //         let { userId, stars } = req.body; // İstifadəçinin ID-si və verdiyi ulduz sayı

    //         if (!userId || !stars) {
    //             return res.status(400).send({ message: "User ID and stars are required" });
    //         }

    //         if (stars < 1 || stars > 5) {
    //             return res.status(400).send({ message: "Stars must be between 1 and 5" });
    //         }

    //         let recipe = await RecipeModel.findById(id);
    //         if (!recipe) {
    //             return res.status(404).send({ message: "Recipe not found" });
    //         }

    //         // İstifadəçinin daha əvvəl ulduz verib-vermədiyini yoxla
    //         let existingRating = recipe.ratings.find(r => r.userId === userId);

    //         if (existingRating) {
    //             // Əgər istifadəçi artıq ulduz veribsə, yenilə
    //             existingRating.stars = stars;
    //         } else {
    //             // Yeni ulduz əlavə et
    //             recipe.ratings.push({ userId, stars });
    //         }

    //         // Ortalaması hesablamaq üçün bütün ulduzları topla və sayına böl (ortalamasını götürmək üçün)
    //         let totalStars = recipe.ratings.reduce((sum, r) => sum + r.stars, 0);
    //         let averageRating = totalStars / recipe.ratings.length;

    //         // Resepti yenilə
    //         await recipe.save();

    //         res.send({
    //             message: "Success! Rating updated",
    //             averageRating: averageRating.toFixed(1), // yuvarlaqlaşdırır
    //             ratings: recipe.ratings
    //         });
    //     } catch (error) {
    //         res.status(500).send({ message: "Error rating recipe", error: error.message });
    //     }
    // }
};

module.exports = RecipeController;
