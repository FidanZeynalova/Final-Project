    const express = require("express")
    const RecipesController = require("../controller/recipesController")
    const RecipesMiddleware = require("../middlewares/recipesMiddleware")
    const recipesRouter = express.Router()


    recipesRouter.get("/", RecipesController.getAllRecipes)
    recipesRouter.get("/:id", RecipesController.getRecipeById)
    recipesRouter.get("/chefs/:id", RecipesController.getAllChefRecipes)
    recipesRouter.delete("/:id", RecipesController.deleteRecipe)
    recipesRouter.post("/",RecipesMiddleware, RecipesController.createRecipe)
    recipesRouter.put("/:id", RecipesController.updateRecipe)

    module.exports = recipesRouter
