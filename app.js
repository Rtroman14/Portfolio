const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/resume", (req, res) => {
    res.sendfile(__dirname + "/public/img/Resume.pdf");
});

app.get("/Certificate-Advanced-CSS-and-Sass", (req, res) => {
    res.sendfile(__dirname + "/public/img/Certificate-Advanced-CSS-Sass.pdf");
});

app.get("/Certificate-Web-Developer-Bootcamp", (req, res) => {
    res.sendfile(__dirname + "/public/img/Certificate-Web-Developer-Bootcamp.pdf");
});

app.get("/Certificate-Automate-the-Boring-Stuff", (req, res) => {
    res.sendfile(__dirname + "/public/img/Certificate-Automate-the-Boring-Stuff.pdf");
});

app.post("/send", (req, res) => {
    const output = `
    <p>You have a new contact request!</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
    </ul>
    <p>Message: ${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    let mailOptions = {
        from: process.env.USER,
        to: process.env.GMAIL,
        subject: "Portfolio Website Contact Request",
        html: output
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    res.redirect("/");
});

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("Portfolio server has started!"));
