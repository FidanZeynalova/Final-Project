const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());


const RecipesSchema = mongoose.Schema({
    dish: String,
    category: String, 
    chefById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chefs",
    }, 
    prepTime: String,  
    cookingTime: String,  
    totalTime: String,
    servings: Number,  
    calories: Number,  
    ingredients: [String], 
    instructions: String,  
    rating: { type: Number, default: 0 }, 
    videoUrl: String, 
    img: String,  
    createdAt: { type: Date, default: Date.now }
});

const RecipesModel = mongoose.model("recipes", RecipesSchema);

module.exports = RecipesModel;
