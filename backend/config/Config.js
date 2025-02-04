const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("✅ Successfully connected to Half Baked Harvest Database"))
    .catch((err) => console.log("❌ Failed to connect to database:", err));