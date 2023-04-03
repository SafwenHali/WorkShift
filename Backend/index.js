//dependancies
const express = require("express");
const connectDB = require("./config/database");

//.env
require("dotenv").config();

//app
const app = express();

//configure app
app.use(express.json());

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

//server
app.listen(process.env.PORT, () => {
  console.log("server started on", process.env.PORT);
});
