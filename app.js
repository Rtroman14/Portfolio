const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

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

// app.post("/send", (req, res) => {
//     const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//         <li>Name: ${req.body.name} </li>
//         <li>Email: ${req.body.email} </li>
//     </ul>
//     <p>Message: ${req.body.message}</p>
//     `;

//     // let transporter = nodemailer.createTransport({
//     //     host: "",
//     //     port: 587,
//     //     secure: false,
//     //     auth: {
//     //         user: "rroman@cr-bps.com",
//     //         pass: "123546Timothy!"
//     //     }
//     // });

//     // let mailOptions = {
//     //     from: '"Nodemailer Contact" <rroman@cr-bps.com>',
//     //     to: "rtroman14@gmail.com",
//     //     subject: "Portfolio Contact Request",
//     //     text: "Hello World",
//     //     html: output
//     // };

//     // // send mail with defined transport object
//     // transporter.sendMail(mailOptions, (error, info) => {
//     //     if (error) {
//     //         return console.log(error);
//     //     }
//     //     console.log("Message sent: %s", info.messageId);
//     //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

//     //     // res.render("contact", { msg: "Email has been sent!" });
//     // });
// });

// app.post("/send", (req, res) => {
//     console.log(req.body);
// });

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "rtroman14@gmail.com",
        pass: "123546Timothy"
    }
});

var mailOptions = {
    from: "rtroman14@gmail.com",
    to: "rroman@cr-bps.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});

let port = process.env.PORT || 3000;

app.listen(port, () => console.log("Portfolio server has started!"));

// <%= msg %>
