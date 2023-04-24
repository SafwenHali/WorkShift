const express = require("express");
const {
  getLessonById,
  getLessons,
  createLesson,
  deleteLesson,
  updateLesson,
} = require("../controllers/lessons");
const router = express.Router();

//POST
router.post("/", createLesson);
//GET
router.get("/", getLessons);
//GET by Id
router.get("/:id", getLessonById);
//DELETE
router.delete("/:id", deleteLesson);
//PUT
router.put("/:id", updateLesson);

module.exports = router;
