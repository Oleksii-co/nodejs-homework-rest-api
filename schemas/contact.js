import Joi from "joi";

const addSchema = Joi.object({
  name: Joi.string().required().messages({"string.empty": "missing required name field"}),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

export default addSchema;
