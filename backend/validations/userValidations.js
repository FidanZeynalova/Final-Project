const joi = require("joi")
const express = require("express")
const app = express()
app.use(express.json())


const UserValidations = joi.object({
    firstname: joi.string().min(3).max(50).required(),
    lastname: joi.string().min(5).max(50).required(),
    age: joi.number().integer().positive().min(15).max(120).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(30).required(),
    confirmpassword: joi.string().min(3).max(30).required(),
    favorites: joi.array().items(joi.string().hex().length(24)) 
})

module.exports = UserValidations