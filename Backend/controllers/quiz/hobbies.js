const Hobbies = require("../../models/quiz/hobbies");

//POST
const createHobbies = async (req, res) => {
  //create
  try {
    const hobbies = await Hobbies.create({
      hobbyName: req.body.hobbyName,
      hobbyDesc: req.body.hobbyDesc,
      hobbyImage: req.body.hobbyImage,
      formations: req.body.formations,
    });
    res.json({ hobbies: hobbies });
  } catch (err) {
    console.log(err.message);
    res.json("Hobbies not created");
  }
};

//GET all hobbies
const getHobbies = async (req, res) => {
  //find
  const hobbies = await Hobbies.find();
  //return Hobbies&&
  res.json({ hobbies: hobbies });
};

//GET Hobbies by Id
const getHobbiesById = async (req, res) => {
  try {
    const hobbies = await Hobbies.findById(req.params.id);
    res.json({ hobbies: hobbies });
  } catch (err) {
    console.log(err.message);
    res.json("Hobbies not found");
  }
};

//DELETE
const deleteHobbies = async (req, res) => {
  const hobbies = await Hobbies.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("Hobby deleted");
};

//UPDATE
const updateHobbies = async (req, res) => {
  try {
    const hobbies = await Hobbies.findByIdAndUpdate(req.params.id, {
      hobbyName: req.body.hobbyName,
      hobbyDesc: req.body.hobbyDesc,
      hobbyImage: req.body.hobbyImage,
      formations: req.body.formations,
    });
    res.json(`Hobbies updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("Hobbies not updated ");
  }
};
module.exports = {
  createHobbies,
  getHobbies,
  getHobbiesById,
  deleteHobbies,
  updateHobbies,
};
