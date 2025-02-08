const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const userRouter = require("./routes/userRoutes.js")

dotenv.config()
app.use(express.json())
app.use(cors())

require("./config/config.js")
app.use("/users",userRouter)


const PORT  = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    
})