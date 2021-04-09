const { check } = require("express-validator");

exports.mediaValidators = [
  //name
  check("name")
    .trim()
    .escape()
    .isLength({ min: 1, max: 50 })
    .withMessage("Name must be between 1 and 50 characters."),

  //type will be a checkbox
  check("type")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Please provide a valid e-mail address."),

  //genre
  check("genre")
    .trim()
    .escape()
    .isLength({ min: 1, max: 15 })
    .withMessage("Name must be between 1 and 15 characters."),

  //comment
  check("comment").trim().escape()
];

exports.characterValidators = [
  //name
  check("name")
    .trim()
    .escape()
    .isLength({ min: 1, max: 30 })
    .withMessage("Name must be between 1 and 30 characters."),

  //comment
  check("comment").trim().escape()
];