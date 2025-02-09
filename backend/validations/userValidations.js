const joi = require("joi")


const UserValidations = joi.object({
    firstName: joi.string().min(5).max(30).required(),
    lastName: joi.string().min(5).max(30).required(),
    age: joi.number().integer().positive().min(5).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(30).required(),
    favorites: joi.array().items(joi.string().hex().length(24)) 
})

module.exports = UserValidations