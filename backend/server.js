const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5175;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', // Allow your React app's URL
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

app.post('/send', (req, res) => {
    console.log('Received POST request:', req.body);

    const { name, email, phone, company, address, requirements } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable
            pass: process.env.EMAIL_PASS, // Use environment variable
        },
    });

    let mailOptions = {
        from: 'work.at.infinity0012@gmail.com', // sender address
        to: 'engineersbuy@gmail.com', // list of receivers
        subject: 'New Contact Form Submission', // Subject line
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Company: ${company}
            Address: ${address}
            Requirements: ${requirements}
        `, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});


console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


