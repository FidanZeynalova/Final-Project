const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const route = require("./routes/RecipesRoutes")
const router = require("./routes/UserRoutes.js")

app.use(cors())
app.use(express.json())
dotenv.config()

app.use("/recipes", route)
app.use("/users", router)
require("./config/Config.js")



const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})