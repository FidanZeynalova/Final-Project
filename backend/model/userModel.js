const express = require("express")
const mongoose = require("mongoose")


let UsersSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String,
    confirmPassword:Number
    
})

let UsersModel = mongoose.model("users",UsersSchema)

module.exports = UsersModel