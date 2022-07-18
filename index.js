const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const tranporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: process.env.ELASTIC_USER,
    pass: process.env.ELASTIC_API_KEY,
  },
});

const sendMail = async () => {
  await tranporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: "ik.ugwuanyi@gmail.com",
    subject: "Send Email Demo",
    html: `<h1>Hi! This is a test email. This means that the app works</h1>`,
  });
  console.log("Email sent successfully");
};

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

sendMail();
