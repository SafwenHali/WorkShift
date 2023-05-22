var express = require("express");
const authConfig = require("../config/authConfig");
const router = express.Router();
const {
  getUsers,
  updateUser,
  deleteUser,
  getUsersByRole,
  getUsersById,
  getUserProfile,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/", getUserProfile);

router.get("/:id", getUsersById);
router.get("/:role", getUsersByRole);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
