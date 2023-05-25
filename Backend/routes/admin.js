const express = require("express");
const { login, register } = require("../controllers/admin");

const router = express.Router();

//register
router.post("/register", UserController.register);
//login
router.post("/login", UserController.login);

module.exports = router;
