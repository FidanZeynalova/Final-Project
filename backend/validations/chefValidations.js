const Joi = require("joi")


let ChefValidations = Joi.object({
    chefFirstName: Joi.string().min(3).max(20).required(),
    chefLastName: Joi.string().min(3).max(20).required(),
    chefImg: Joi.string().uri().required(),
})

module.exports = ChefValidations