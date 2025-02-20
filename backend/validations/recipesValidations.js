const Joi = require("joi")
Joi.objectId = require("joi-objectid")(Joi)


const RecipesValidations = Joi.object({
    img: Joi.string().required(),
    dish: Joi.string().required(),
    category: Joi.string().required(),
    cookingTime: Joi.string().required(),
    prepTime: Joi.string().required(),
    totalTime: Joi.string().required(),
    servings: Joi.number().required(),
    calories: Joi.number().required(),
    instructions: Joi.string().required(),
    ingredients: Joi.array().items(Joi.string()).required(),
    videoUrl: Joi.string().allow('', null),
    chefById: Joi.objectId().required(),
});

module.exports = RecipesValidations;
