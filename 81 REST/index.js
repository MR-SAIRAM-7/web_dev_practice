const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidV4 } = require("uuid");
const methodOverride = require("method-override");

const port = 8080;

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Dummy data
let posts = [
    { id: uuidV4(), name: "sairam", content: "This is sairam content" },
    { id: uuidV4(), name: "saiteja", content: "This is saiteja content" },
    { id: uuidV4(), name: "subhash", content: "This is subhash content" },
    { id: uuidV4(), name: "ravi", content: "This is ravi content" },
];

// Routes
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});

app.post("/posts", (req, res) => {
    const { username, content } = req.body;
    posts.push({ id: uuidV4(), name: username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);
    res.render("show", { post });
});

app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);
    res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const post = posts.find((p) => p.id === id);
    if (post) {
        post.content = content;
    }
    res.redirect(`/posts/${id}`);
});

app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p)=>id !== p.id);
    // res.send("post deleted successfully");
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log(`App is listening at port: ${port}`);
});

