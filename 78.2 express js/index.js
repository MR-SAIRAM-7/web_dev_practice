// path parameters

const express = require("express");
const app = express();
const port = 8080;

app.listen(port,(req,res)=>{
    console.log("Server is listening at port : "+ port);
});

app.get("/:username/:id",(req,res)=>{
    let {username} = req.params;
    res.send(`<h1>This account belongs to @${username}</h1>`);
})

// app.get("/:id",(req,res)=>{
//     let {username} = req.params;
//     res.send(`<h1>This account belongs to @${id}</h1>`);
// })

// query strings
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>No Search Query Found</h1>");
    }
    res.send(`<h1>These are the results for ${q}`)
})

// http://127.0.0.1:8080/search?q=sairam --- go to this link for search querys
