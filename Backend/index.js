//dependancies
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
// const authConfig = require("./config/authConfig");
const bodyParser = require("body-parser");
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const { authenticate } = require("./middlewares/authMiddleware");
const authRouter = require("./routes/authRouter");
const usersRouter = require("./routes/usersRouter");
const { checkProfile } = require("./middlewares/profileMiddleware");
// const usersRouter = require("./routes/usersRouter");

//.env
require("dotenv").config();

//app
const app = express();
const router = express.Router();

//parssing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configure app
app.use(express.json());
app.use(cors());

//connect to database
connectDB();

//routing test
app.get("/", (req, res) => {
  res.send("backend running");
});

//routing
app.use("/api/article", require("./routes/articles"));
app.use("/api/formation", require("./routes/formations"));
app.use("/api/category", require("./routes/categories"));
app.use("/api/subcategory", require("./routes/subcategories"));
app.use("/api/cours", require("./routes/cours"));
app.use("/api/lessons", require("./routes/lessons"));
app.use("/api/hobbies", require("./routes/quiz/hobbies"));
app.use("/api/quiz", require("./routes/quiz/quiz"));
app.use("/api/careerfield", require("./routes/quiz/careerfield"));
app.use("/api/jobs", require("./routes/quiz/jobs"));
app.use("/api/personalities", require("./routes/quiz/personalities"));
app.use("/api/users", require("./routes/usersRouter"));
app.use("/api/auth", require("./routes/authRouter"));

app.get("/in", checkProfile);
// (req, res) => {
//   // console.log(req.headers.authorization);
//   // check tHe JWT token
//   let token = req.headers.at;
//   if (token === undefined) {
//     console.log("AT does not exist");
//   }
//   //console.log(token);
//   const jwt = require("jsonwebtoken");
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     //console.log(err)
//     // if (err) return res.sendStatus(403)
//     // req.user = user
//     console.log(user.role);
//     // next()
//   });

//   // Detect the role
//   res.send("backend IZ 00001");
// });
// app.use("course/add", "middleware", CourseController::add);

app.listen(process.env.PORT, () => {
  console.log("server started on", process.env.PORT);
});
