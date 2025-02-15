const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const userRouter = require("./routes/userRoutes.js")
const recipesRouter = require("./routes/recipesRoutes.js")
const chefsRouter = require("./routes/chefRoutes.js")
const lostPasswordRouter = require("./routes/loginPasswordRoutes.js")

dotenv.config()
app.use(express.json())
app.use(cors())

require("./config/config.js")
app.use("/users", userRouter)
app.use("/recipes", recipesRouter)
app.use("/chefs", chefsRouter)
app.use("/password", lostPasswordRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})