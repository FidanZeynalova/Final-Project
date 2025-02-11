const jwt = require('jsonwebtoken');
const secretKey = "secretKey"


const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) {
        return res.send("Token yoxudr")
    } else {

    }

    
    try {
        let decoded = jwt.verify(token, secretKey)
        req.user = decoded
        next()
    } catch (error) {
        res.send("Token Yalnisdir")
    }

}
module.exports = AuthMiddleware