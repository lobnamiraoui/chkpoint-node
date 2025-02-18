const nodemailer = require("nodemailer");
require('dotenv').config();
// Créer un transporteur
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.CLIENT_EMAIL,
    pass: process.env.GOOGLE_PASS,
  },
});

// Options de l'email
const mailOptions = {
  from: process.env.CLIENT_EMAIL,
  to: process.env.USER_EMAIL,
  subject: "Test Email Node.js",
  text: "hello from node js",
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
