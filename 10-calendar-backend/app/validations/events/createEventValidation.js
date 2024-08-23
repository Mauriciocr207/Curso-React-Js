const { parseZonedDateTime } = require("@internationalized/date");
const { body } = require("express-validator");

const isValidDate = (value) => {
    try {
        parseZonedDateTime(value);
        return true;
    } catch (error) {
        return false;
    }
}

const updateEventValidation = () => [
    body('title').notEmpty().withMessage('El título es obligatorio'),
    body('start')
        .notEmpty().withMessage('El inicio es obligatorio')
        .custom(isValidDate).withMessage('La fecha de inicio no es válida'),
    body('end')
        .notEmpty().withMessage('El final es obligatorio')
        .custom(isValidDate).withMessage('La fecha de finalización no es válida'),
]

module.exports = updateEventValidation;