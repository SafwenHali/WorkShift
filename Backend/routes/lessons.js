const express = require("express");
const {
  getLessonById,
  getLessons,
  createLesson,
  deleteLesson,
  updateLesson,
  getLessonByCoursID,
} = require("../controllers/lessons");
const router = express.Router();

//POST
router.post("/", createLesson);
//GET
router.get("/", getLessons);
//GET by Id
router.get("/:id", getLessonById);
// get lesson  by cours  id
router.get("/lessonbycoursid/:id", getLessonByCoursID);

//DELETE
router.delete("/:id", deleteLesson);
//PUT
router.put("/:id", updateLesson);

module.exports = router;
