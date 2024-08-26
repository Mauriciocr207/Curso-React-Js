const { Router } = require("express");
const { AuthController } = require("../controllers");
const { loginValidation, registerValidation } = require("../validations/auth");
const { checkValidation, validateJWT } = require("../middlewares");
const authRouter = Router();

authRouter.post("/register", checkValidation(registerValidation), AuthController.register);

authRouter.post("/login", checkValidation(loginValidation), AuthController.login);

authRouter.post("/validate-token", AuthController.validateToken);

authRouter.get("/re-validate-token", validateJWT, AuthController.reValidateToken);

module.exports = authRouter;
