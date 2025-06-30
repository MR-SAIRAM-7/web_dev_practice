// const express = require("express");
// const app = express();
// let port = 5500;
// // console.dir(app) ---> to check available functions (it is an object)

// // Creating a server to listen request
// app.listen(port, () =>{
//     console.log("app is listening at port : " + port);
// })

// //Receiving a request
// app.use((req,res,next)=>{
//     console.log("New Incoming Request");
//     next();
// })

// sending a response
// app.use((req,res)=>{
//     // console.log(req)
//     console.log("New incoming request.");
//     res.send('This is the response for your request!!');
// })

// app.use((req,res)=>{
//     // console.log(req)
//     console.log("New incoming request.");
//     res.send({
//         apple : "red",
//         banana : "yellow"
//     });
// })

// app.use((req,res)=>{
//     res.send("<h1>This is a standard response");
//     next();
// })

// const express = require("express");
// const app = express();
// let port = 5500;

// app.listen(port, () => {
//     console.log("App is listening at port: " + port);
// });

// Logging middleware
// app.use((req, res, next) => {
//     console.log("New Incoming Request");
//     next();
// });

// Sending a response
// app.use((req, res) => {
//     res.send("<h1>This is a standard response</h1>");
// });

// app.get("/apple", (req, res) => {
//     res.send({
//         name: "apple",
//         color: "red"
//     });
// });

// app.get("/apple", (req, res, next) => {
//     req.fruitInfo = { name: "apple", color: "red" };
//     next();
// }, (req, res) => {
//     res.send(req.fruitInfo);
// });

const express = require("express");
const app = express();
let port = 5500;

app.listen(port, () => {
    console.log("App is listening at port: " + port);
});

// Logging middleware
// app.use ---> listens all routes and all requests
app.use((req, res, next) => {
    console.log("New Incoming Request: " + req.method + " " + req.url);
    next();
});


// Specific route for /apple
app.get("/apple", (req, res) => {
    res.send({
        name: "apple",
        color: "red"
    });
});

app.get("/",(req,res)=>{
    res.send("You are on Home page");
});

app.get("/search",(req,res)=>{
    res.send("You are on search page");
});

app.get("/play",(req,res)=>{
    res.send("You are on playing page");
});

app.get("/*splat",(req,res)=>{
    res.send("This is for all other routes if used enters any invalid route");
});

// Catch-all response for any other route
app.use((req, res) => {
    res.send("<h1>This is a standard response</h1>");
});






