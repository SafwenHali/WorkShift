const Cours = require("../models/cours");

//POST
const createCours = async (req, res) => {
  //create
  try {
    const { nom, description, duree, formation } = req.body;
    const cours = new Cours({ nom, description, duree, formation });
    await cours.save();
    res.status(201).json(cours);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//GET
//lister les cours
const getAllCours = async (req, res) => {
  try {
    const cours = await Cours.find().populate("formation");
    res.json(cours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//GET by Id
const getCoursById = async (req, res) => {
  res.json(res.cours);
  // try {
  //   const cours = await Cours.findById(req.params.id);
  //   res.json({ cours: cours });
  // } catch (err) {
  //   console.log(err.message);
  //   res.json("cours not found");
  // }
};
//DELETE
const deleteCours = async (req, res) => {
  try {
    await res.cours.remove();
    res.json({ message: "Cours supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//UPDATE
const updateCours = async (req, res) => {
  if (req.body.nom != null) {
    res.cours.nom = req.body.nom;
  }
  if (req.body.description != null) {
    res.cours.description = req.body.description;
  }
  if (req.body.duree != null) {
    res.cours.duree = req.body.duree;
  }
  if (req.body.formation != null) {
    res.cours.formation = req.body.formation;
  }
  try {
    const updatedCours = await res.cours.save();
    res.json(updatedCours);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// middleware pour obtenir le cours by id test test
async function getCours(req, res, next) {
  let cours;
  try {
    cours = await Cours.findById(req.params.id).populate("formation");
    if (cours == null) {
      return res.status(404).json({ message: "Cours introuvable" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.cours = cours;
  next();
}
module.exports = {
  createCours,
  getAllCours,
  getCoursById,
  getCours,
  deleteCours,
  updateCours,
};
