import Joi from "joi";

export const adminSchemaValidator = {
  register: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().min(6).required(),
  }),
  login: Joi.object({
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().min(6).required(),
  }),
};
