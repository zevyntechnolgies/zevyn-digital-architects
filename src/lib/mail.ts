import nodemailer from "nodemailer";
import type { ContactInput } from "./validation";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactInput) {
  await transporter.sendMail({
    from: `"ZEVYN Technologies" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: data.email,
    subject: `New Contact Request - ${data.projectType}`,
    html: `
      <h2>New Contact Request</h2>

      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "-"}</p>
      <p><strong>Website:</strong> ${data.website || "-"}</p>
      <p><strong>Project Type:</strong> ${data.projectType}</p>

      <hr />

      <h3>Project Details</h3>

      <p>${data.message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}

export async function sendAutoReply(data: ContactInput) {
  await transporter.sendMail({
    from: `"ZEVYN Technologies" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: "We've received your inquiry",
    html: `
      <h2>Hello ${data.name},</h2>

      <p>
        Thank you for contacting <strong>ZEVYN Technologies</strong>.
      </p>

      <p>
        We've received your inquiry regarding
        <strong>${data.projectType}</strong>.
      </p>

      <p>
        Our team will review your request and respond within
        <strong>one business day.</strong>
      </p>

      <br/>

      <p>Best Regards,</p>

      <h3>ZEVYN Technologies</h3>

      <p>https://zevyn.tech</p>
    `,
  });
}