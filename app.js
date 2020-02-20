const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// view engine setup
app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

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

    let transporter = nodemailer.createTransport("SMTP", {
        service: "gmail",
        // host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USERNAME_SENDER,
            pass: process.env.GMAIL_PASSWORD_SENDER
        }
    });

    let mailOptions = {
        from: process.env.GMAIL_USERNAME_SENDER,
        to: process.env.GMAIL_USERNAME_SENDEE,
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

// <%= msg %>
