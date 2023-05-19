const joi = require("joi");

const RegisterValidation = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  userName: joi.string().lowercase().replace(/\s+/g, "_"),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } }),
  password: joi.string().required(),
  confirmPassword: joi
    .string()
    .valid(joi.ref("password"))
    .required()
    .label("Confirm password"),
  role: joi.string().required(),
});

const loginValidation = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi.string().required(),
});
module.exports = { RegisterValidation, loginValidation };
