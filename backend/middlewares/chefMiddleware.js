const ChefValidations = require("../validations/chefValidations")


let ChefMiddleware = (req,res,next) =>{
    let {error} = ChefValidations.validate(req.body)
    if (error) {
        res.send(error.details[0].message)
    }else{
        next()
    }
}

module.exports = ChefMiddleware