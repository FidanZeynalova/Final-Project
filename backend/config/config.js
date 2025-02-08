const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`Database Succesfull Connected`);
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });