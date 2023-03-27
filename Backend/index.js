//dependancies
const express = require('express');
const connectDB = require('./config/database');

//.env
require("dotenv").config();

//app
const app = express();

//configure app
app.use(express.json());

//connect to database
connectDB();

//routing test
app.get('/',(req,res) => { res.send('Test 2')});

//routing
app.use("/api/article", require("./routes/articles"));

//server
app.listen(process.env.PORT,() => {
    console.log('server started on',process.env.PORT);
})


