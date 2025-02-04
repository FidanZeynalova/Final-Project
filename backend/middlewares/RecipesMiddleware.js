const RecipesValidationSchema = require("../validations/RecipesValidations");



const checkRecipesMiddleware = (req, res, next) => {
    let {error} = RecipesValidationSchema.validate(req.body)
    if (!error) {
        res.send(error.details[0].message)
    }else{
        next()
    }
};

module.exports = checkRecipesMiddleware;
