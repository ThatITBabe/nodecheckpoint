// const nodemailer = require("nodemailer");

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "thatitbabe@gmail.com",
//     pass: "@Janetjanet1",
//   },
// });

// // setup email data with unicode symbols
// let mailOptions = {
//   from: "thatitbabe@gmail.com", // sender address
//   to: "obasanyajanet1@gmail.com", // list of receivers
//   subject: "Test Email", // Subject line
//   text: "Hello from Node.js", // plain text body
//   html: "<b>Hello from Node.js. This is Obasanya Anuoluwapo aka ThatITBabe &reg;. Testing node mailer by sending you this lovely email with warm regards </b>", // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Message sent: %s", info.messageId);
// });

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider',
  auth: {
    user: 'your-email',
    pass: 'your-password',
  },
});

// Set up the email data
const mailOptions = {
  from: 'your-email',
  to: 'your-email', // Replace with your own email address
  subject: 'Test Email',
  text: 'This is a test email sent from Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error occurred:');
    console.log(error.message);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID: ' + info.messageId);
  }
});
