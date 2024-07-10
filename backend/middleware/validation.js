const { body } = require("express-validator");

const validateUserRegistration = [
  body("email", "Please include a valid email").isEmail(),
  body("password", "Password must be at least 6 characters long").isLength({
    min: 8,
  }),
];

module.exports = validateUserRegistration;
