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
//POST
router.post("/", createCours);
//GET
router.get("/", getAllCours);
//GET by Id
router.get("/:id", getCoursById);
// get by formation id
router.get("/coursbyformationid/:id", getCoursByFormationID);

//DELETE
router.delete("/:id", deleteCours);
//PUT
router.put("/:id", updateCours);

module.exports = router;
