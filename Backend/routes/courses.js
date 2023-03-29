const express = require("express");
const {
  createCourse,
  getCourse,
  getCourseById,
  deleteCourse,
  updateCourse,
} = require("../controllers/courses");
const router = express.Router();

//post course
router.post("/", createCourse);

//get courses
router.get("/", getCourse);

//get courseByID
router.get("/:id", getCourseById);

//delete course
router.delete("/:id", deleteCourse);

//update course
router.put("/:id", updateCourse);

module.exports = router;
