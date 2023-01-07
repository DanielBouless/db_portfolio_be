require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res)=>{
    res.send("Welcome to My Stuff - DB")
})

app.get('/home', (req,res)=>{
    res.redirect('/home')
})

app.listen(process.env.PORT, ()=>{
    console.log( 'Connected')
})