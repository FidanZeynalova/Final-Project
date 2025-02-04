const express = require("express");
const checkUserMiddleware = require("../middlewares/UserMiddleware");
const UserController = require("../controller/UserController");

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", checkUserMiddleware, UserController.addUser);
router.put("/:id", UserController.editUserById);
router.delete("/:id", UserController.deleteUserById)

module.exports = router
