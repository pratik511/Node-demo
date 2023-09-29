const Joi = require("joi");
const validator = require("../../../middleware/validator");
module.exports = {
  create: validator({
    body: Joi.object({
      title: Joi.string().required(),
    }),
  }),
  update: validator({
    body: Joi.object({
      title: Joi.string(),
    }),
    params: Joi.object({
      id: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .message("Invalid ID")
        .required(),
    }),
  }),
  toggleActive: validator({
    params: Joi.object({
        id: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .message("Invalid ID")
            .required(),
    }),
}),
};
