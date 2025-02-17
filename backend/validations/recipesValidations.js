const Joi = require("joi")
Joi.objectId = require("joi-objectid")(Joi)


const RecipesValidations = Joi.object({
    img: Joi.string().required(),
    dish: Joi.string().required(),
    category: Joi.string().required(),
    cookingTime: Joi.number().required(),
    prepTime: Joi.number().required(),
    totalTime: Joi.number().required(),
    servings: Joi.number().required(),
    calories: Joi.number().required(),
    instructions: Joi.string().required(),
    ingredients: Joi.array().items(Joi.string()).required(),
    videoUrl: Joi.string().allow('', null) // videoUrl opsiyonel olarak ayarlandı
});

module.exports = RecipesValidations;
