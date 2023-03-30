const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");
const { string } = require("joi");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: Number,
    required: true,
  },
  coursePrice: {
    type: Number,
    required: true,
  },
  courseInstructor: {
    type: String,
    required: true,
  },
  courseCategory: {
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

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
