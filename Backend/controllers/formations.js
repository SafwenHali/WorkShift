const Formation = require("../models/formation");
const SubCategory = require("../models/subcategory");

//POST
const createFormation = async (req, res) => {
  //create

  try {
    const formation = await Formation.create({
        Cover: req.body.Cover,
        formationDescription: req.body.formationDescription,
       formationName: req.body.formationName,
       formationDuration: req.body.formationDuration,
       formationPrice: req.body.formationPrice,
       formationInstructor: req.body.formationInstructor,
       SubCategory: req.body.SubCategory,
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
  // res.send();
  res.json({ formations: formation });
  // res.send("backend IZ 00001");
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
//get formation by sub id
const getFormationByFormateur = async (req, res) => {
  const id = req.params.id;
  const formation = await Formation.find({ formationInstructor: id });
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
      Cover: req.body.Cover,
        formationDescription: req.body.formationDescription,
       formationName: req.body.formationName,
       formationDuration: req.body.formationDuration,
       formationPrice: req.body.formationPrice,
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
  getFormationByFormateur
};
