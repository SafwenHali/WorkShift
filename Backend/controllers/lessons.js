const Lesson = require("../models/lesson");

//POST
const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create({
      name: req.body.name,
      content: req.body.content,
      cours_id: req.body.cours_id,
    });
    res.json({ lessons: lesson });
  } catch (err) {
    console.log(err.message);
    res.json("lesson not created");
  }
};

//GET all
const getLessons = async (req, res) => {
  //find lessons
  const lesson = await Lesson.find();
  // return all lessons
  res.json({ lessons: lesson });
};

//GET by id
const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.json({ lessons: lesson });
  } catch (err) {
    console.log(err.message);
    res.json("lesson not found ");
  }
};
//GET lesson by cours id
const getLessonByCoursID = async (req, res) => {
  const id = req.params.id;
  const lesson = await Lesson.find({ Cours: id });
  res.json({ lesson: lesson });
};

//DELETE
const deleteLesson = async (req, res) => {
  const lesson = await Lesson.findByIdAndDelete(req.params.id);
  //return
  res.json("lesson deleted");
};

//UPDATE
const updateLesson = async (req, res) => {
  try {
    lesson = await Lesson.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      content: req.body.content,
      cours_id: req.body.cours_id,
    });
    res.json("lesson successfully updated");
  } catch (err) {
    console.log(err.message);
    res.json("lesson not updated ");
  }
};
module.exports = {
  getLessonById,
  getLessons,
  createLesson,
  deleteLesson,
  updateLesson,
};
