const jwt = require("jsonwebtoken");
const Auth = require("../models/authModel");
const User = require("../models/userModel");

exports.register = (req, res) => {
  const auth = new Auth({
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  });

  auth.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      res.send(err);
    }

    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        res.send(err);
      }

      res.send({ message: "User was registered successfully!" });
    });
  });
};

exports.login = (req, res) => {
  Auth.findOne({ email: req.body.email }, (err, auth) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!auth) {
      res.status(401).send({ message: "Invalid email or password!" });
      return;
    }

    const isValidPassword = auth.validPassword(req.body.password);

    if (!isValidPassword) {
      res.status(401).send({ message: "Invalid email or password!" });
      return;
    }

    const token = jwt.sign(
      { id: auth._id, role: auth.role },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400, // 24 hours
      }
    );
    res.status(200).send({
      id: auth._id,
      email: auth.email,
      role: auth.role,
      accessToken: token,
    });
  });
};
