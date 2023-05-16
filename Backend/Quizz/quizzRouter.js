const express = require("express");
const {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("./quizzController");
const router = express.Router();

//post article
router.post("/", createQuiz);

//get articles
router.get("/", getAllQuizzes);

//get articleByID
router.get("/:id", getQuizById);

//delete article
router.delete("/:id", deleteQuiz);

//update article
router.put("/:id", updateQuiz);

module.exports = router;
