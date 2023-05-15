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
// app.use("api/auth", require("./routes/route"));

app.use("/api/auth", authRouter);

// app.use("/api/auth", authenticate);

// app.post("/register", authController.register);
// app.post("/login", authController.login);
// app.post("/refresh-token", authController.refreshToken);
// app.post("/logout", authController.logout);
//app.get("/profile", authController.authenticate, userController.getUserProfile);

app.listen(process.env.PORT, () => {
  console.log("server started on", process.env.PORT);
});
