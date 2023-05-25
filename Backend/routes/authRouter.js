var express = require("express");

const router = express.Router();
const {
  register,
  login,
  verifyAccount,
} = require("../controllers/authController");

router.post("/login", login);
router.post("/register", register);
router.post("/verifyAccount", verifyAccount);

module.exports = router;
