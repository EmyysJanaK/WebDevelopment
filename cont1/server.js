const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'janaksenevirathne8@gmail.com',
    pass: 'janak123$'
  }
});

// Set up a route to handle the form submission
app.post('/send-email', (req, res) => {
  // Get form values (you'll need to install the body-parser module to parse the request body)
  const { name, email, message } = req.body;

  // Prepare the email message
  const mailOptions = {
    from: 'janaksenevirathne8@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Message from Your Web Page',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
