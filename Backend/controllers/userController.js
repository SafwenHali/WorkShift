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

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  // const userId = req.user.id;
  // const user = await User.findById(userId);
  // if (!user) {
  //   return res.status(404).json({ message: "user not found" });
  // }
  // await user.remove();
  const formation = await Formation.findByIdAndDelete(req.params.id);
  res.json("formation deleted");
};
exports.updateUser = async (req, res) => {
  // const userId = req.user.id;
  // const user = await User.findById(userId);
  // if (!user) {
  //   return res.status(404).json({ message: "user not found" });
  // }
  try {
    user = await User.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });

    res.json("User successfully updated");
  } catch (err) {
    console.log(err.message);
    res.json("User is not updated");
  }
};
exports.getUsersByRole = async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({ role });

    if (users.length === 0) {
      return res
        .status(404)
        .json({ error: "No users found with the specified role" });
    }

    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ users: user });
  } catch (err) {
    console.log(err.message);
    res.json("user not found");
  }
};
