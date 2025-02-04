const express = require("express")
const RecipeController = require("../controller/RecipesController")
const checkRecipesMiddleware = require("../middlewares/RecipesMiddleware")

const route = express.Router()


route.get("/", RecipeController.getAllRecipes)
route.get("/:id", RecipeController.getRecipeById)
route.post("/", checkRecipesMiddleware, RecipeController.addRecipe)
route.delete("/:id", RecipeController.deleteRecipeById)
route.put("/:id", RecipeController.editRecipeById)


module.exports = route
