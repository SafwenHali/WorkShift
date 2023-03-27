//dependancies
const express = require('express');

//app
const app = express();

//routing
app.get('/',(req,res) => {
    res.send('hello back')
})

//server
app.listen(7000,() => {
    console.log('server started on 7000')
})