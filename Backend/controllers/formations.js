const Formation = require("../models/formation");
const SubCategory = require("../models/subcategory");
//POST
const createFormation = async (req, res) => {
  //create
  try {
    const { nom, description, duree, SubCategory } = req.body;
    const formation = new Formation({ nom, description, duree, SubCategory });
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
//GET formation by subcategory id
const getFormationBySubId = async (req, res) => {
  const id = req.params.id;
  //  const formation = await Formation.find({ subcategory_id: id });
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
  getFormationBySubId,
};
