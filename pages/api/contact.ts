import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { EMAIL_CONFIG } from "../../lib/constants";
import type { ContactApiResponse, ContactFormData } from "../../lib/types/api";
import { getContactMailBody } from "../../lib/utils/contactMailBody";
import { formatValidationErrors, sanitizeInput, validateContactForm } from "../../lib/utils/validation";

/**
 * Contact form submission API endpoint
 * Validates form data and sends email notification
 */
export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ContactApiResponse>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      message: "Method not allowed. Only POST requests are accepted.",
    });
  }

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
    console.error("Missing required environment variables for email service");
    return res.status(500).json({ 
      message: "Server configuration error. Please contact support." 
    });
  }

  try {
    
    // Extract and sanitize form data
    const rawData = req.body as ContactFormData;
    const formData: ContactFormData = {
      firstName: sanitizeInput(rawData.firstName || ""),
      lastName: sanitizeInput(rawData.lastName || ""),
      email: sanitizeInput(rawData.email || ""),
      subject: sanitizeInput(rawData.subject || ""),
      message: sanitizeInput(rawData.message || ""),
    };

    // Validate form data
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return res.status(400).json({
        message: formatValidationErrors(validation.errors),
        missingFields: validation.errors.map(error => error.field),
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: EMAIL_CONFIG.service,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      replyTo: formData.email,
      subject: `${EMAIL_CONFIG.subjectPrefix} ${formData.subject}`,
      text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html: getContactMailBody(formData),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    
    // Handle environment configuration errors
    if (error instanceof Error && error.message.includes("environment variables")) {
      return res.status(500).json({ 
        message: "Server configuration error. Please contact support." 
      });
    }
    
    // Handle email sending errors
    return res.status(500).json({ 
      message: "Failed to send your message. Please try again later or contact us directly." 
    });
  }
}
