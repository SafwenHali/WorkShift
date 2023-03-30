const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");
const { string } = require("joi");

const formationSchema = mongoose.Schema({
  formationName: {
    type: String,
    required: true,
  },
  formationDuration: {
    type: Number,
    required: true,
  },
  formationPrice: {
    type: Number,
    required: true,
  },
  formationInstructor: {
    type: String,
    required: true,
  },
  formationCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  SubCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

const Formation = mongoose.model("formation", formationSchema);
module.exports = Formation;
