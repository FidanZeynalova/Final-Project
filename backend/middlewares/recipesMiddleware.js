const RecipesValidations = require("../validations/recipesValidations")

const RecipesMiddleware = (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload an image!"

            });
        }

        req.body.img = `http://localhost:5050/upload/${req.file.filename}`;

        if (typeof req.body.ingredients === 'string') {
            req.body.ingredients = JSON.parse(req.body.ingredients);
        }

        req.body.prepTime = Number(req.body.prepTime);
        req.body.cookingTime = Number(req.body.cookingTime);
        req.body.totalTime = Number(req.body.totalTime);
        req.body.servings = Number(req.body.servings);
        req.body.calories = Number(req.body.calories);

        // console.log("Validation öncesi body:", req.body);

        const { error } = RecipesValidations.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message
            });
        }
        next();
    } catch (error) {
        console.error("Middleware Error:", error);
        return res.status(400).json({
            message: "An error occurred during the process",
            error: error.message
        });
    }
}

module.exports = RecipesMiddleware