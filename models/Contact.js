import { Schema, model } from "mongoose";

import MongooseError from "../helpers/MongooseError.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", MongooseError);

contactSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

contactSchema.post("findOneAndUpdate", MongooseError );

const Contact = model("contact", contactSchema);

export default Contact;
