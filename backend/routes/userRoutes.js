let express = require("express")
const UsersController = require("../controller/userController")

const userRouter = express.Router()

userRouter.get("/", UsersController.getAllUsers)
userRouter.get("/:id", UsersController.getUserById)
userRouter.post("/register", UsersController.registerUser)
userRouter.post("/login", UsersController.loginUser)
userRouter.post("/confirm", UsersController.confirmPasswordUser)

module.exports = userRouter