const express = require("express");
const checkUserMiddleware = require("../middlewares/UserMiddleware");
const UserController = require("../controller/UserController");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.login);
router.post("/", UserController.register)
router.post("/", UserController.confirm)

module.exports = router
