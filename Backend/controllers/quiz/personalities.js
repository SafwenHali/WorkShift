const Person = require("../../models/quiz/Personalities");

//POST
const createPerson = async (req, res) => {
  //create
  try {
    const person = await Person.create({
      personalityName: req.body.personalityName,
      personalityCode: req.body.personalityCode,
      personalityDesc: req.body.personalityDesc,
      personalityImage: req.body.personalityImage,
      jobsList: req.body.jobsList,
    });
    res.json({ person: person });
  } catch (err) {
    console.log(err.message);
    res.json("Person not created");
  }
};

//GET all Person
const getPerson = async (req, res) => {
  //find
  const person = await Person.find();
  //return Person&&
  res.json({ person: person });
};

//GET Person by Id
const getPersonById = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json({ person: person });
  } catch (err) {
    console.log(err.message);
    res.json("Person not found");
  }
};

//DELETE
const deletePerson = async (req, res) => {
  const person = await Person.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("personality deleted");
};

//UPDATE
const updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, {
      personalityName: req.body.personalityName,
      personalityCode: req.body.personalityCode,
      personalityDesc: req.body.personalityDesc,
      personalityImage: req.body.personalityImage,
      jobsList: req.body.jobsList,
    });
    res.json(`Person updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("Person not updated ");
  }
};
module.exports = {
  createPerson,
  getPerson,
  getPersonById,
  deletePerson,
  updatePerson,
};
