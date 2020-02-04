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

app.listen(3000, () => {
    console.log("Server started on port 3000...");
});
