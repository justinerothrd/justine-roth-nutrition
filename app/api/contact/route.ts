import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "justinerothrd@gmail.com";

type ContactFormData = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  appointmentPreference?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactFormData;

    const name = cleanText(body.name, 100);
    const email = cleanText(body.email, 200).toLowerCase();
    const phone = cleanText(body.phone, 50);
    const appointmentPreference = cleanText(
      body.appointmentPreference,
      50
    );
    const message = cleanText(body.message, 3000);

    // Hidden honeypot field. Bots often fill this in.
    const website = cleanText(body.website, 200);

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safePreference = escapeHtml(
      appointmentPreference || "Not selected"
    );
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Justine Roth Nutrition <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #34414E; line-height: 1.6;">
          <h1 style="font-size: 22px; margin-bottom: 24px;">
            New Website Inquiry
          </h1>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p>
            <strong>Appointment preference:</strong>
            ${safePreference}
          </p>

          <div style="margin-top: 28px;">
            <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
            <p style="margin-top: 0;">${safeMessage}</p>
          </div>
        </div>
      `,
      text: [
        "New Website Inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Appointment preference: ${
          appointmentPreference || "Not selected"
        }`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Your message could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Your message could not be sent. Please try again." },
      { status: 500 }
    );
  }
}
