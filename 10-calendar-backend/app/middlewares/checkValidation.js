const { validationResult } = require("express-validator");

const checkValidation = (validation) => {
  return [
    ...validation(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({
          ok: false,
          errors: errors.mapped(),
        });
      }
      next();
    }
  ]
};

module.exports = checkValidation;
