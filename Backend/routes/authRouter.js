var express = require("express");
const authConfig = require("../config/authConfig");
const router = express.Router();
const {
  register,
  login,
  verifyAccount,
  salem,
} = require("../controllers/authController");
const { checkProfile } = require("../middlewares/profileMiddleware");

router.post("/login", login);
router.post("/login2", login);
router.post("/register", register);
router.post("/verifyAccount", verifyAccount);

// router.post(
//   "course/add",
//   (req, res, next) => {
//     console.log("Accessing the secret section ...");
//     next(); // pass control to the next handler
//   },
//   (req, res) => {
//     res.send("about");
//   }
// );

//router.post("/salem", salem);

router.post("/salem", checkProfile, salem);

module.exports = router;
