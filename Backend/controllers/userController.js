const User = require("../models/userModel");

exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send(users);
  });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    res.send(user);
  });
};
