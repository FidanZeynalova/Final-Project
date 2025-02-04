const Joi = require("joi");

const RecipesValidationSchema = Joi.object({
    title: Joi.string().min(5).max(40).required(),
    author: Joi.string().min(8).max(20).required(),
    prepTime: Joi.number().positive().integer().min(1).max(1440).required(), 
    cookTime: Joi.number().positive().integer().min(1).max(1440).required(),
    totalTime: Joi.number().positive().integer().min(1).max(1440).required(),
    servings: Joi.number().positive().integer().min(1).max(100).required(), 
    calories: Joi.number().positive().integer().min(1).max(2000).required(), 
    ingredients: Joi.array().items(Joi.string()).required(),
    instructions: Joi.array().items(Joi.string()).required(),
    image: Joi.string().uri().optional(),
    createdAt: Joi.date().timestamp().required(),
});

module.exports = RecipesValidationSchema