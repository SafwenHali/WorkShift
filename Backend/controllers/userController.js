const User = require("../models/userModel");

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from JWT token
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
