//dependancies
const express = require('express');
const cors = require('cors')
const connectDB = require('./config/database');

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
app.get('/',(req,res) => { res.send('backend Running')});

//routing
app.use("/api/article", require("./routes/articles"));

//server
app.listen(process.env.PORT,() => {
    console.log('server started on',process.env.PORT);
})


