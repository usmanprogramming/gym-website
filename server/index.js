import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, number, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      // 1. MUST use this 'from' address until you verify your own domain
      from: "Gym Contact <onboarding@resend.dev>",
      // 2. The email where you want to RECEIVE the leads
      to: process.env.EMAIL_USER,
      // 3. This lets you click 'Reply' in your email to talk to the customer
      reply_to: email,
      subject: subject || "New Gym Lead!",
      html: `
        <h3>New Lead from ${name}</h3>
        <p><strong>Phone:</strong> ${number}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: "Email sent!" });
  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({ error: "Failed to send" });
  }
});

app.listen(process.env.PORT || 5000, () => console.log("Server Live!"));
