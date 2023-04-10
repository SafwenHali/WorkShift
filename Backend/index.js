//dependancies
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

//.env
require("dotenv").config();

//app
const app = express();

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

//server
app.listen(process.env.PORT, () => {
  console.log("server started on", process.env.PORT);
});
