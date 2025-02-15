const express = require("express")
const UsersLostPasswordController = require("../controller/lostPassword.Controller")
const lostPasswordRouter = express.Router()

lostPasswordRouter.get("/password", UsersLostPasswordController.forgotPassword)
lostPasswordRouter.post("/password", UsersLostPasswordController.verifyCode)
lostPasswordRouter.put("/password", UsersLostPasswordController.updatePassword)

module.exports = lostPasswordRouter