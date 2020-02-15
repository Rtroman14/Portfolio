const express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("Portfolio server has started!"));
