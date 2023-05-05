const { required } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const formateurSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["formateur"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Formateur = mongoose.model("formateur", formateurSchema);
module.exports = Formateur;
