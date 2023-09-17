import Joi from "joi";

export const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "string.empty": "missing required name field" }),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
