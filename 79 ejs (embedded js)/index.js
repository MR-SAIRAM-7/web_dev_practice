const express = require("express");
const app = express();
const port = 8080;
const path = require('path');


app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));

app.listen(port, (req, res) => {
    console.log(`App is listening at the port ${port}`);
})

// Using EJS
app.set("view engine", "ejs");

// Templating
app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/interpolation", (req, res) => {
    res.render("interpolation_syntax.ejs")
});

// Passing data to ejs

app.get("/rolldice", (req, res) => {
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { dicevalue });
});

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam","bob","saiteja","ravi","subhash","sairam","umar"];
    // let {username} = req.params;
     let {username} = req.params; 
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
         res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs")
    }
   
});



