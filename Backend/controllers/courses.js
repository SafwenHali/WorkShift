const Course = require("../models/course");

//POST course
const createCourse = async (req, res) => {
  //create course function
  try {
    const course = await Course.create({
      courseName: req.body.name,
      courseDuration: req.body.duration,
      coursePrice: req.body.price,
      courseInstructor: req.body.instructor,
      courseCategory: req.body.courseCategory,
      subCategory: req.body.subCategory,
    });
    res.json({ courses: course });
  } catch (err) {
    console.log(err.message);
    res.json("course not created");
  }
};

//GET course
const getCourse = async (req, res) => {
  //find
  const course = await Course.find();
  //return course
  res.json({ courses: course });
};

//GET course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json({ courses: course });
  } catch (err) {
    console.log(err.message);
    res.json("course not found");
  }
};

//DELETE course
const deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
};

//UPDATE course
const updateCourse = async (req, res) => {
  try {
    course = await Course.findByIdAndUpdate(req.params.id, {
      courseName: req.body.name,
      courseDuration: req.body.duration,
      coursePrice: req.body.price,
      courseInstructor: req.body.instructor,
      courseCategory: req.body.courseCategory,
      subCategory: req.body.subCategory,
    });
    res.json("course successfully updated");
  } catch (err) {
    console.log(err.message);
    res.json("course not updated");
  }
};

module.exports = {
  getCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
