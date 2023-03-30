const express = require("express");
const {
  getFormation,
  getFormationById,
  createFormation,
  updateFormation,
  deleteFormation,
} = require("../controllers/formations");
const router = express.Router();

//post
router.post("/", createFormation);

//get
router.get("/", getFormation);

//get ByID
router.get("/:id", getFormationById);

//delete
router.delete("/:id", deleteFormation);

//update
router.put("/:id", updateFormation);

module.exports = router;
