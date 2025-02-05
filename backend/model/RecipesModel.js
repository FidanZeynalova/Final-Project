const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: String, // Reseptin adı
  author: String, // Müəllif
  prepTime: Number, // Hazırlıq vaxtı
  cookTime: Number, // Bişirmə vaxtı
  totalTime: Number, // Ümumi vaxt
  servings: Number, // Porsiya sayı
  calories: Number, // Kalori miqdarı
  ingredients: [String], // İnqrediyentlər (array şəklində)
  instructions: [{ type: String, required: true }], // Hazırlanma qaydası (array şəklində)
  image: String, // Reseptin şəkli
  createdAt: { type: Date, default: Date.now }, // Tarix
  ratings: [
    {
      userId: String, // Reytinq verən istifadəçinin ID-si
      stars: Number, // İstifadəçinin verdiyi ulduz sayı (1-5)
    }
  ]
});

const RecipeModel = mongoose.model("recipes", RecipeSchema)


module.exports = RecipeModel

