const express = require("express")
const mongoose = require("mongoose")
// const { Stream } = require("nodemailer/lib/xoauth2")
const app = express()
app.use(express.json())


let UsersSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    age:Number,
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true
    },
    password:String,
    confirmpassword:String, //registerden keçərkən yoxlanılan parollar
    confirmPassword:String, // emaildən gələn kod
    favorites:[{type:mongoose.Schema.Types.ObjectId,ref:"recipes"}]
    
})

let UsersModel = mongoose.model("users",UsersSchema)

module.exports = UsersModel