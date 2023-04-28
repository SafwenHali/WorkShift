const express = require("express");
const {
  getFormation,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
  getFormationBySubId,
} = require("../controllers/formations");
const router = express.Router();

//post
router.post("/", createFormation);

//get
router.get("/", getFormation);

//get ByID
router.get("/:id", getFormationById);
//get
router.get("/formationbysub/:id", getFormationBySubId);

//delete
router.delete("/:id", deleteFormation);

//update
router.put("/:id", updateFormation);

module.exports = router;
