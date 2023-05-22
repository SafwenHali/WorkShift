const Formation = require("../models/formation");
const SubCategory = require("../models/subcategory");

//POST
const createFormation = async (req, res) => {
  //create
  try {
    const { nom, description, duree, SubCategory, Formateur, Cover } = req.body;
    const formation = new Formation({
      nom,
      description,
      duree,
      SubCategory,
      Formateur,
      Cover,
    });
    await formation.save();
    res.json({ formations: formation });

    // res.status(201).json(formation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // try {
  //   const formation = await Formation.create({
  //     formationName: req.body.name,
  //     formationDuration: req.body.duration,
  //     formationPrice: req.body.price,
  //     formationInstructor: req.body.instructor,
  //     formationCategory: req.body.formationCategory,
  //     SubCategory: req.body.SubCategory,
  //   });
  //   res.json({ formations: formation });
  // } catch (err) {
  //   console.log(err.message);
  //   res.json("formation not created");
  // }
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

//get formation by sub id
const getFormationBySubCategoryID = async (req, res) => {
  const id = req.params.id;
  const formation = await Formation.find({ SubCategory: id });
  res.json({ formation: formation });
};

//DELETE
const deleteFormation = async (req, res) => {
  const formation = await Formation.findByIdAndDelete(req.params.id);
  res.json("formation deleted");
};

//UPDATE
const updateFormation = async (req, res) => {
  try {
    formation = await Formation.findByIdAndUpdate(req.params.id, {
      nom: req.body.nom,
      description: req.body.description,
      duree: req.body.duree,
      subCategory: req.body.subCategory,
      // Formateur: req.body.Formateur,
      Cover: req.body.Cover,
    });
    res.json("formation successfully updated");
  } catch (err) {
    console.log(err.message);
    res.json("formation not updated");
  }
};
exports.userValidator = async (req, res) => {
  console.log("after salem");
  res.json({ message: "in salem" });
};

module.exports = {
  getFormation,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
  getFormationBySubCategoryID,
};
