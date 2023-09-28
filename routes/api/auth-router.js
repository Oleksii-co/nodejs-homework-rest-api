import express from "express";
import authController from "../../controllers/auth-controller.js";
import * as userSchemas from "../../models/User.js";
import validateBody from "../../middlewares/validateBody.js";
import authenticate from "../../middlewares/authenticate.js";

const authRouter = express.Router();

const userRegisterValidate = validateBody(userSchemas.userRegisterSchema);

const userLoginValidate = validateBody(userSchemas.userLoginSchema);

authRouter.post("/register", userRegisterValidate, authController.register);

authRouter.post("/login", userLoginValidate, authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
