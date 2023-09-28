import { Schema, model } from "mongoose";
import Joi from "joi";

import { MongooseError } from "../helpers/index.js";

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegExp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
    },
  },

  { versionKey: false, timestamps: true }
);

userSchema.post("save", MongooseError);

userSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

userSchema.post("findOneAndUpdate", MongooseError);

export const userRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string()
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const User = model("user", userSchema);

export default User;
