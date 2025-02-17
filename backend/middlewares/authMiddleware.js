const jwt = require("jsonwebtoken");
require("dotenv").config()
const secretKey = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
    try {
        // Authorization header'ını kontrol et
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Token yok!" });
        }

        // "Bearer " prefix'ini kontrol et ve token'i ayıkla
        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Geçersiz token formatı!" });
        }

        const token = authHeader.split(' ')[1];

        // Token'i doğrula
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Geçersiz token!" });
            }
            
            // Token geçerliyse kullanıcı bilgisini request'e ekle
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error("Auth Middleware Error:", error);
        res.status(500).json({ message: "Token doğrulama hatası!" });
    }
};

module.exports = authMiddleware;
