const authMiddleware = require("../middlewares/authMiddleware");
const { register, login } = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

//REGISTER
router.post("/api/auth/register", register);
//LOGIN
router.post("/api/auth/login", login);
// GET ALL USERS
router.get(
  "/api/users",
  [authMiddleware.verifyToken],
  userController.getAllUsers
);
//GET USER BY ID
router.get(
  "/api/users/:userId",
  [authMiddleware.verifyToken],
  userController.getUserById
);
module.exports = router;
