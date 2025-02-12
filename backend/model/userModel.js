const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())


let UsersSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    email:String,
    password:String,
    confirmpassword:String, //registerden keçərkən yoxlanılan parollar
    confirmPassword:Number, // emaildən gələn code
    favorites:[{type:mongoose.Schema.Types.ObjectId,ref:"recipes"}]
    
})

let UsersModel = mongoose.model("users",UsersSchema)

module.exports = UsersModel