const Joi = require("joi")


let ChefValidations = Joi.object({
    chefName: Joi.string().min(3).max(20).required(),
    experience: Joi.number().min(1).max(50).positive().integer().required(),
    specialty: Joi.string().min(3).max(20).required(),
    chefImg: Joi.string().required()
})

module.exports = ChefValidations