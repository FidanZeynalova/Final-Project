const checkRecipeData = (req, res, next) => {
    const { title, author, prepTime, cookTime, totalTime, servings, calories, ingredients, instructions } = req.body;

    if (!title || !author || !prepTime || !cookTime || !totalTime || !servings || !calories || !ingredients || !instructions) {
        return res.status(400).send({
            message: "Bütün məlumatlar tələb olunur!",
        });
    }

    next(); 
};

module.exports = checkRecipeData;
