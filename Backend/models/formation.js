const mongoose = require("mongoose");
const schema = mongoose.Schema;

const formationSchema = schema({
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
