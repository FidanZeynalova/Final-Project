const jwt = require('jsonwebtoken');
require("dotenv").config()
const secretKey = process.env.SECRET_KEY;

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null
    console.log(token);


    if (!token) {
        return res.send("Token yoxdur");
    }

    try {
        // Tokeni doğrulanır
        let decoded = jwt.verify(token, secretKey);
        console.log(decoded);
        req.user = decoded;

        next();
    } catch (error) {
        res.send("Token Yalnışdır");
    }
}

module.exports = AuthMiddleware;
