//dependancies
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const authConfig = require("./config/authConfig");
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares/authMiddleware");
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");

//.env
require("dotenv").config();

//app
const app = express();

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
<<<<<<< Updated upstream

=======
app.use("/api/lessons", require("./routes/lessons"));
// app.use("/api/auth", require("./routes/authRouter"));
app.post("/api/auth/register", authController.register);
app.post("/api/auth/login", authController.login);
app.get("/api/users", [authMiddleware.verifyToken], userController.getAllUsers);
app.get(
  "/api/users/:userId",
  [authMiddleware.verifyToken],
  userController.getUserById
);

app.use("/api/Quizz", require("./Quizz/quizzRouter"));
>>>>>>> Stashed changes
//server
app.listen(process.env.PORT, () => {
  console.log("server started on", process.env.PORT);
});
