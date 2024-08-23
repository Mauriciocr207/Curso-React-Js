const { body } = require("express-validator");

const loginValidation = () => [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),

  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Email inválido"),

  body("pass")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe contenere al menos 6 caracteres"),
];

module.exports = loginValidation;