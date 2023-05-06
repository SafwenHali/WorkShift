const Quiz = require('./quizzModel');

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/*const getQuizById = async(req, res, next) => {
  let quiz;
  try {
    quiz = await Quiz.findById(req.params.id);
    if (quiz == null) {
      return res.status(404).json({ message: 'Cannot find quiz' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.quiz = quiz;
  next();
}*/
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
    question: req.body.question,
    options: req.body.options
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
      question: req.body.question,
      options: req.body.options,
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
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};