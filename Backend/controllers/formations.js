const Formation = require("../models/formation");

//POST
const createFormation = async (req, res) => {
  //create
  try {
    const formation = await Formation.create({
      formationName: req.body.name,
      formationDuration: req.body.duration,
      formationPrice: req.body.price,
      formationInstructor: req.body.instructor,
      formationCategory: req.body.formationCategory,
      subCategory: req.body.subCategory,
    });
    res.json({ formations: formation });
  } catch (err) {
    console.log(err.message);
    res.json("formation not created");
  }
};

//GET
const getFormation = async (req, res) => {
  //find
  const formation = await Formation.find();
  //return
  res.json({ formations: formation });
};

//GET  by ID
const getFormationById = async (req, res) => {
  try {
    const formation = await Formation.findById(req.params.id);
    res.json({ formations: formation });
  } catch (err) {
    console.log(err.message);
    res.json("formation not found");
  }
};

//DELETE
const deleteFormation = async (req, res) => {
  const formation = await Formation.findByIdAndDelete(req.params.id);
};

//UPDATE
const updateFormation = async (req, res) => {
  try {
    formation = await Formation.findByIdAndUpdate(req.params.id, {
      Name: req.body.name,
      formationName: req.body.name,
      formationDuration: req.body.duration,
      formationPrice: req.body.price,
      formationInstructor: req.body.instructor,
      formationCategory: req.body.formationCategory,
      subCategory: req.body.subCategory,
    });
    res.json("formation successfully updated");
  } catch (err) {
    console.log(err.message);
    res.json("formation not updated");
  }
};

module.exports = {
  getFormation,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
};
