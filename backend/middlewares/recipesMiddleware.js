const RecipesValidations = require("../validations/recipesValidations")


const RecipesMiddleware = (req, res, next) => {
    let { error } = RecipesValidations.validate(req.body)
    if (error) {
        res.send(error.details[0].message)
    } else {
        next()
    }
}

module.exports = RecipesMiddleware