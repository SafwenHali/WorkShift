const Quiz = require('../models/quiz');

const getAllQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.find();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json({quiz:quiz});
  } catch (err) {
    console.log(err.message);
    res.json("Quizz not found");
  }
};

const createQuiz = async (req, res) => {
  const quiz = new Quiz({
    quizTitle: req.body.quizTitle,
    quizDescription: req.body.quizDescription,
    quizType: req.body.quizType,
    quizQuestions: req.body.quizQuestions
  });
  try {
    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateQuiz = async (req, res) => {
  try {
    quiz = await Quiz.findByIdAndUpdate(req.params.id, {
        quizTitle: req.body.quizTitle,
        quizDescription: req.body.quizDescription,
        quizType: req.body.quizType,
        quizQuestions: req.body.quizQuestions
      });
    res.json("Quiz successfully updated ");
  } catch (err) {
    console.log(err);
    res.json("Quiz not updated");
  }
};

const deleteQuiz = async (req, res) => {
  const quiz = await Quiz.findByIdAndDelete(req.params.id);
  //return
  res.json("quizz deleted");
};

module.exports = {
  getAllQuiz,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};