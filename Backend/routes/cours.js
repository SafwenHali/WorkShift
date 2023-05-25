const express = require("express");
const {
  createCours,
  getAllCours,
  getCoursById,
  deleteCours,
  updateCours,
  getCoursByFormationID,
} = require("../controllers/cours");
const router = express.Router();
const { checkProfile } = require("../middlewares/profileMiddleware");

//POST
router.post("/", checkProfile, createCours);
//GET
router.get("/", getAllCours);
//GET by Id
router.get("/:id", getCoursById);
// get by formation id
router.get("/coursbyformationid/:id", getCoursByFormationID);

//DELETE
router.delete("/:id", checkProfile, deleteCours);
//PUT
router.put("/:id", checkProfile, updateCours);

module.exports = router;
