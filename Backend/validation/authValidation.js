const joi = require("joi");

const RegisterValidation = joi.object({
  name: joi.string().required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } }),
  password: joi.string().required(),
});

const loginValidation = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().required(),
});
module.exports = { RegisterValidation, loginValidation };
