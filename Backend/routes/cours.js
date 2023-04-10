const express = require("express");
const { createCours } = require("../controllers/cours");
const router = express.Router();

//post course
router.post("/", createCours);

module.exports = router;
