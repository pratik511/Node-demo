const Joi = require("joi");
const validator = require("../../../middleware/validator");

module.exports = {
  signup: validator({
    body: Joi.object({
      email: Joi.string().email().required(),
      userName: Joi.string(),
      password: Joi.string().required(),
    }),
  }),
  login: validator({
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
};
