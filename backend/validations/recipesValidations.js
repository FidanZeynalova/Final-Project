const Joi = require("joi")
Joi.objectId = require("joi-objectid")(Joi)


const RecipesValidations = Joi.object({
    dish: Joi.string().min(3).max(100).required(), 
    category:Joi.string().min(3).max(100).required(),
    chefById: Joi.objectId(), 
    prepTime: Joi.number().integer().positive().min(1).max(180).required(), 
    cookingTime: Joi.number().integer().positive().min(1).max(180).required(), 
    totalTime: Joi.number().integer().positive().min(1).max(360).required(),
    servings: Joi.number().integer().positive().min(1).max(50).required(), 
    calories: Joi.number().integer().positive().min(1).max(2000).required(),
    ingredients: Joi.array().items(Joi.string().min(1).required()).min(1).required(), 
    instructions: Joi.string().min(10).required(), 
    rating: Joi.number().integer().min(0).max(5), 
    videoUrl: Joi.string().uri().pattern(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/, 'YouTube URL').required(),  
    img: Joi.string().required() 
});

module.exports = RecipesValidations;
