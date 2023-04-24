const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Cours = require("../models/cours");
const lessonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      //pdf , img , vid
      content: {
        type: String,
        enum: ["VIDEO", "PDF", "IMAGE"],
      },
    },
    cours_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Cours,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Lesson = mongoose.model("lesson", lessonSchema);
module.exports = Lesson;
