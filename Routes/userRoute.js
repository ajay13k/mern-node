const express = require("express");
const userRoute = express.Router();
const userController = require("../Controllers/userController");
userRoute.post("/user/create", userController.createUser);
userRoute.post("/user/login", userController.userLogin);
module.exports = userRoute
