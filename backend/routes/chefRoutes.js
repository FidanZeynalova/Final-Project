const express = require("express");
const ChefController = require("../controller/chefController");
const ChefMiddleware = require("../middlewares/chefMiddleware");
const upload = require("../middlewares/chefUploadMiddleware");
const chefsRouter = express.Router();

chefsRouter.get("/", ChefController.getAllChef);

chefsRouter.post(
    "/",
    upload.single("chefImg"),
    ChefMiddleware,
    ChefController.addChef
);

chefsRouter.get("/:id", ChefController.getChefById);
chefsRouter.delete("/:id", ChefController.deleteChef);
chefsRouter.put("/:id", upload.single("chefImg"), ChefController.editChef);

module.exports = chefsRouter;
