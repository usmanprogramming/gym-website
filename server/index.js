import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/contact", async (req, res) => {
  const { name, email, number, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Required fields missing" });
  }

  // 1. Create the transporter (Using the 16-char password WITHOUT spaces)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // ADD THIS LINE BELOW:
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
    dnsLookup: (hostname, options, callback) => {
      // This forces the connection to use IPv4
      require("dns").lookup(hostname, { family: 4 }, callback);
    },
  });

  // 2. Configure the email
  const mailOptions = {
    from: process.env.EMAIL_USER, // MUST be your Gmail address
    to: process.env.EMAIL_USER, // Sending the lead to yourself
    replyTo: email, // This allows you to click 'Reply' to the customer
    subject: subject || `New Gym Lead: ${name}`,
    text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent" });
  } catch (err) {
    // This logs the SPECIFIC reason (like 'Invalid Login') in your Render Logs
    console.error("DETAILED ERROR:", err);
    res
      .status(500)
      .json({ error: "Failed to send email", details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
