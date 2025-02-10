const mongoose = require("mongoose")

let ChefSchema = new mongoose.Schema({
    chefFirstName:String,
    chefLastName:String,
    chefImg:String
})

let ChefModel = mongoose.model("chefs",ChefSchema)

module.exports = ChefModel