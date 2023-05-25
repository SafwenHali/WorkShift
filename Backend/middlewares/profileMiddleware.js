const jwt = require("jsonwebtoken");
exports.checkProfile = (req, res, next) => {
  let token = req.headers.at;
  //console.log("hani hna");
  if (token === undefined) {
    console.log("AT does not exist");
    return res.sendStatus(401);
  }
  // console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(user.role);
    if (user.role == "admin" || user.role == "instructor") {
      next();
    } else {
      return res.sendStatus(403);
    }

    // next();
  });
  next();
  // Detect the role
  //res.send("backend IZ 00001");
  // console.log("in middle-ware ");
};
