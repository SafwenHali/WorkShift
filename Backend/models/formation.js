const mongoose = require("mongoose");
const schema = mongoose.Schema;
const SubCategory = require("../models/subcategory");
// const Formateur = require("../models/formateur");
const formationSchema = mongoose.Schema(
  {
    nom: { type: String, required: true },
    description: { type: String, required: true },
    duree: { type: Number, required: true },
    SubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: SubCategory,
      required: true,
    },
    // Formateur: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: Formateur,
    //   required: true,
    // },
    Cover: {
      type: String,
      required: true,
    },

    // formationName: {
    //   type: String,
    //   required: true,
    // },
    // formationDuration: {
    //   type: String,
    //   required: true,
    // },
    // formationPrice: {
    //   type: Number,
    //   required: true,
    // },
    // formationInstructor: {
    //   type: String,
    //   required: true,
    // },
    // formationCategory: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    // SubCategory: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "SubCategory",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Formation = mongoose.model("formation", formationSchema);
module.exports = Formation;
