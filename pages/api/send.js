import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, mobile, email, subject, message } = req.body;

    // console.log('Environment Variables:', process.env.EMAIL_USER, process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aryanrathod410@gmail.com',
        pass: 'qlvf iluo aqas bcgk',
        // type: 'PLAIN' // Specify the authentication method explicitly
      },
    });

    // transporter.verify(function(error, success) {
    //   if (error) {
    //     console.error('Error verifying transporter:', error);
    //   } else {
    //     console.log('Transporter is ready to take messages');
    //   }
    // });

    const mailOptions = {
      from: email,
      to: 'aryanrathod410@gmail.com',
      subject: `New Message from ${name}: ${subject}`,
      text: `
        Name: ${name}
        Mobile: ${mobile}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
