const express = require('express');
const { registerUserController, loginUserController, logoutUserController } = require('../controllers/auth.controller');
const authRouter = express.Router();

authRouter.post("/register",registerUserController);

authRouter.post("/login",loginUserController);

authRouter.get("/logout",logoutUserController)


module.exports = authRouter;