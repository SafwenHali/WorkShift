const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");

const courseSchema = Joi.object({
  courseId: Joi.string().required(),
  courseName: Joi.string().required(),
  courseDuration: Joi.number().integer().positive().required(),
  coursePrice: Joi.number().positive().required(),
  courseInstructor: Joi.string().required(),
});
const Course = mongoose.model("course", courseSchema);

module.exports = Course;
