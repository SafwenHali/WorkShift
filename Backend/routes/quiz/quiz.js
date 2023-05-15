const express = require("express");
const {
  getAllQuiz,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../../controllers/quiz/quiz");
const router = express.Router();

//post article
router.post("/", createQuiz);

//get articles
router.get("/", getAllQuiz);

//get articleByID
router.get("/:id", getQuizById);

//delete article
router.delete("/:id", deleteQuiz);

//update article
router.put("/:id", updateQuiz);

module.exports = router;
