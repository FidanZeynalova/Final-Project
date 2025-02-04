const UserValidationSchema = require("../validations/UserValidation");



const checkUserMiddleware = (req, res, next) => {
    let { error } = UserValidationSchema.validate(req.body)
    if (!error) {
        res.send(error.details[0].message)
    } else {
        next()
    }
};

module.exports = checkUserMiddleware;
