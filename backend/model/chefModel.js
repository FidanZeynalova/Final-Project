const mongoose = require("mongoose")

let ChefSchema = new mongoose.Schema({
    chefName: String,
    chefImg: String,
    experience: Number,
    specialty: String
})

let ChefModel = mongoose.model("chefs", ChefSchema)

module.exports = ChefModel