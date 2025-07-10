const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});


app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`<h1>Standard GET response : ${user} </h1>`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`<h1>Standard POST response : ${user} </h1>`);
});

