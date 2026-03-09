const express = require("express");
const {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeUserController,
} = require("../controllers/auth.controller");
const authRouter = express.Router();
const authUser = require("../middlewares/auth.middleware");

authRouter.post("/register", registerUserController);

authRouter.post("/login", loginUserController);

authRouter.get("/logout", logoutUserController);

authRouter.get("/get-me", authUser, getMeUserController);

module.exports = authRouter;
