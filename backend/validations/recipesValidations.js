const joi = require("joi");

const RecipesValidations = joi.object({
    dish: joi.string().min(3).max(100).required(), 
    category:joi.string().min(3).max(100).required(),
    createdBy: joi.string().min(3).max(50).required(), 
    prepTime: joi.number().integer().positive().min(1).max(180).required(), 
    cookingTime: joi.number().integer().positive().min(1).max(180).required(), 
    totalTime: joi.number().integer().positive().min(1).max(360).required(),
    servings: joi.number().integer().positive().min(1).max(50).required(), 
    ingredients: joi.array().items(joi.string().min(1).required()).min(1).required(), 
    instructions: joi.string().min(10).required(), 
    rating: joi.number().integer().min(0).max(5), 
    videoUrl: joi.string().uri().pattern(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/, 'YouTube URL').required(),  
    imageUrl: joi.string().uri().pattern(/^(https?:\/\/).+\.(jpg|jpeg|png|gif)$/, 'Image URL').required() 
});

module.exports = RecipesValidations;
