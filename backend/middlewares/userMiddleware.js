const UserValidations = require("../validations/userValidations")



const UserMiddleware = (req, res, next) => {
    let { error } = UserValidations.validate(req.body)
    if (error) {
        res.send(error.details[0].message)
    } else {
        next()
    }
}

module.exports = UserMiddleware