const jwt = require("jsonwebtoken");

// Middleware to authenticate requests
exports.authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
// Import controllers
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Define routes

// app.post("/register", authController.register);
// app.post("/login", authController.login);
// app.post("/refresh-token", authController.refreshToken);
// app.post("/logout", authController.logout);
// app.get("/profile", authController.authenticate, userController.getUserProfile);
