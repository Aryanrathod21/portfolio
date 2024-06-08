// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mobile, email, subject, message } = req.body;

    // Create a transporter with your SMTP credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aryanrathod410@gmail.com',
        pass: 'Rorono@zoro21'
      }
    });

    // Define email content
    const mailOptions = {
      from: 'aryanrathod410@gmail.com',
      to: 'aryanrathod410@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
