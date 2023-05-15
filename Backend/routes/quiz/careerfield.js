const express = require("express");
const {
  updatefield,
  deletefield,
  getfieldById,
  getfield,
  createfield,
} = require("../../controllers/quiz/careerfields");
const router = express.Router();

//post field
router.post("/", createfield);

//get fields
router.get("/", getfield);

//get fieldByID
router.get("/:id", getfieldById);

//delete field
router.delete("/:id", deletefield);

//update field
router.put("/:id", updatefield);

module.exports = router;
