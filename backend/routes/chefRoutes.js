const express = require("express")
const ChefController = require("../controller/chefController")
const ChefMiddleware = require("../middlewares/chefMiddleware")
const chefsRouter = express.Router()


chefsRouter.get("/", ChefController.getAllChef)
chefsRouter.post("/", ChefMiddleware, ChefController.addChef)
chefsRouter.get("/:id", ChefController.getChefById)
chefsRouter.delete("/:id", ChefController.deleteChef)
chefsRouter.put("/:id", ChefController.editChef)


module.exports = chefsRouter