const { param } = require("express-validator");

const createEventValidation = () => [
    param('id').isMongoId().withMessage('El id del evento es inválido')
]

module.exports = createEventValidation;