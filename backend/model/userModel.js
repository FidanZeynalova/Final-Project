const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())


let UsersSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String,
    confirmPassword:Number,
    favorites:[{type:mongoose.Schema.Types.ObjectId,ref:"recipes"}]
    
})

let UsersModel = mongoose.model("users",UsersSchema)

module.exports = UsersModel