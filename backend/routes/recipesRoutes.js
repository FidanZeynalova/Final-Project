const express = require("express")
const RecipesController = require("../controller/recipesController")
const RecipesMiddleware = require("../middlewares/recipesMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const upload = require("../middlewares/recipesUploadMiddleware")
const recipesRouter = express.Router()


recipesRouter.get("/", RecipesController.getAllRecipes)
recipesRouter.get("/:id", RecipesController.getRecipeById)
recipesRouter.get("/chefs/:id", RecipesController.getAllChefRecipes)
recipesRouter.delete("/:id", authMiddleware, RecipesController.deleteRecipe)
recipesRouter.post("/",
    authMiddleware,
    upload.single("img"),
    RecipesMiddleware,
    RecipesController.createRecipe
)
recipesRouter.put("/:id", RecipesController.updateRecipe)

module.exports = recipesRouter
