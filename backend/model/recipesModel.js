const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());


const RecipesSchema = mongoose.Schema({
    dish: String,  // Yeməyin adı
    category: String, //Hansı kategoriyadırsa
    chefById: ({
        type: mongoose.Schema.Types.ObjectId,
        ref: "chefs",
    }),  // Kim tərəfindən hazırlanıb
    prepTime: Number,  // Hazırlıq vaxtı (dəqiqə)
    cookingTime: Number,  // Bişmə vaxtı (dəqiqə)
    totalTime: Number,  // Ümumi vaxt (dəqiqə)
    servings: Number,  // Porsiya sayı
    calories: Number,  // Kalori sayı
    ingredients: [String],  // Tərkibi (siyahı)
    instructions: String,  // Hazırlanma qaydası
    rating: { type: Number, default: 0 },  // Reytinq (0-5 arası)
    videoUrl: String,  // Hazırlanma videosu URL
    img: String,  // Yeməyin şəkli URL
    createdAt: { type: Date, default: Date.now }
});

// Model yaratmaq
const RecipesModel = mongoose.model("recipes", RecipesSchema);

module.exports = RecipesModel;
