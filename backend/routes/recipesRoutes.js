const express = require("express")
const RecipesController = require("../controller/recipesController")
const recipesRouter = express.Router()


recipesRouter.get("/", RecipesController.getAllRecipes)
recipesRouter.get("/:id", RecipesController.getRecipeById)
recipesRouter.delete("/:id", RecipesController.deleteRecipe)
recipesRouter.post("/", RecipesController.createRecipe)
recipesRouter.put("/:id", RecipesController.updateRecipe)

module.exports = recipesRouter
