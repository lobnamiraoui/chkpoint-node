const nodemailer = require('nodemailer');

// Créer un transporteur
const transporter = nodemailer.createTransport({
  service: 'gmail',  
  auth: {
    user: 'lobnamiraoui@gmail.com',
    pass: '1235lobna',
  },
});

// Options de l'email
const mailOptions = {
  from: 'lobnamiraoui@gmail.com',
  to: 'lobnamiraoui@gmail.com',
  subject: 'Test Email Node.js',
  text: 'Hello from node.js!',
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});