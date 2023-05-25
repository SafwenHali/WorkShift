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
const { checkProfile } = require("../middlewares/profileMiddleware");

//POST
router.post("/", checkProfile, createLesson);
//GET
router.get("/", getLessons);
//GET by Id
router.get("/:id", getLessonById);
// get lesson  by cours  id
router.get("/lessonbycoursid/:id", getLessonByCoursID);

//DELETE
router.delete("/:id", checkProfile, deleteLesson);
//PUT
router.put("/:id", checkProfile, updateLesson);

module.exports = router;
