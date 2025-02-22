import nodemailer from "nodemailer";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    // return res.status(405).json({ error: "Method Not Allowed" });
    return Response.json({
        success: false,
        message: "Method Not Allowed"
    })
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    // return res.status(400).json({ error: "Missing required fields" });
    return Response.json({
        success: false,
        message: "Missing required fields"
    })
  }

  // Mailtrap SMTP configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Replace with your Mailtrap host
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME, // Use environment variables for security
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: 'admin@wds-oman.com',
      to: email,
      subject: subject,
      text: message,
    });

    // res.status(200).json({ success: true, message: "Email sent successfully!" });
    return Response.json({
        success: true,
        message: "Email sent successfully!"
    })
  } catch (error) {
    console.error("Error sending email:", error);
    // res.status(500).json({ error: "Failed to send email" });
    return Response.json({
        success: false,
        message: "Failed to send email"
    })
  }
}
