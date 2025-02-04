const express = require("express")
const RecipeController = require("../controller/RecipesController")
const checkRecipeData = require("../middlewares/RecipesMiddleware")

const route = express.Router()


route.get("/", checkRecipeData, RecipeController.getAllRecipes)
route.get("/:id", RecipeController.getRecipeById)
route.post("/", RecipeController.addRecipe)
route.delete("/:id", RecipeController.deleteRecipeById)
route.put("/:id", RecipeController.editRecipeById)


module.exports = route
