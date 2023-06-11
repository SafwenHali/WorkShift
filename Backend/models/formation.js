const mongoose = require("mongoose");
const formationSchema = mongoose.Schema(
  {
    formationDescription: { 
      type: String, 
      required: true 
    },
    
    Cover: {
      type: String,
      required: true,
    },
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    SubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Formation = mongoose.model("formation", formationSchema);
module.exports = Formation;
