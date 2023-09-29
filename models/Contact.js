import { Schema, model } from "mongoose";

import { MongooseError } from "../helpers/index.js";

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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", MongooseError);

contactSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

contactSchema.post("findOneAndUpdate", MongooseError);

const Contact = model("contact", contactSchema);

export default Contact;
