const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Reseptin adı
  author: { type: String, required: true }, // Müəllif
  prepTime: { type: Number, required: true }, // Hazırlıq vaxtı
  cookTime: { type: Number, required: true }, // Bişirmə vaxtı
  totalTime: { type: Number, required: true }, // Ümumi vaxt
  servings: { type: Number, required: true }, // Porsiya sayı
  calories: { type: Number, required: true }, // Kalori miqdarı
  ingredients: [{ type: String, required: true }], // İnqrediyentlər (array şəklində)
  instructions: [{ type: String, required: true }], // Hazırlanma qaydası (array şəklində)
  image: { type: String }, // Reseptin şəkli (opsional)
  createdAt: { type: Date, default: Date.now }, // Tarix
});

const RecipeModel = mongoose.model("recipes",RecipeSchema)
module.exports = RecipeModel

