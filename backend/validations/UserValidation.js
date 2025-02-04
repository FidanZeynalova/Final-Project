const Joi = require("joi");

const UserValidationSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().positive().min(1).max(120).required(),
  gender: Joi.string().valid("male", "female").required(), // Yalnız "male" və "female" olmalıdır
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  avatar: Joi.string().optional(),
  favorites: Joi.array().items(Joi.string()).optional(),
});

module.exports = UserValidationSchema;
