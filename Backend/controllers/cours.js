const Cours = require("../models/cours");
const Formation = require("../models/formation");

// POST
const createCours = async (req, res) => {
  try {
    const { name, description, formation_id } = req.body;
    const cours = new Cours({ name, description, formation_id });
    await cours.save();
    // res.json({ formations: formation });
    res.status(201).json(cours);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//GET
const getAllCours = async (req, res) => {
  try {
    const cours = await Cours.find();
    res.json({ cours: cours });
  } catch (err) {
    res.json("no cours available");
  }
};

//GET BY ID
const getCoursById = async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);
    res.json({ cours: cours });
  } catch (err) {
    console.log(err.message);
    res.json("cours not found");
  }
};

//GET cours by formation id
const getCoursByFormationID = async (req, res) => {
  const id = req.params.id;
  const cours = await Cours.find({ Formation: id });
  res.json({ cours: cours });
};
//DELETE
const deleteCours = async (req, res) => {
  const cours = await Cours.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("cours deleted");
};

//UPDATE
const updateCours = async (req, res) => {
  if (req.body.name != null) {
    res.cours.name = req.body.name;
  }
  if (req.body.description != null) {
    res.cours.description = req.body.description;
  }
  if (req.body.formation_id != null) {
    res.cours.formation_id = req.body.formation_id;
  }
  try {
    const updatedCours = await res.cours.save();
    res.json(updatedCours);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createCours,
  getAllCours,
  getCoursById,
  deleteCours,
  updateCours,
};
