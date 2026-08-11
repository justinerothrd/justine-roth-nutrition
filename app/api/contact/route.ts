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

  referrer?: unknown;
  landingPage?: unknown;
  submissionPage?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
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

function formatPreference(value: string) {
  const labels: Record<string, string> = {
    "in-person": "In Person",
    virtual: "Virtual",
    either: "Either",
  };

  return labels[value] || "Not selected";
}

function formatSource(utmSource: string, referrer: string) {
  if (utmSource) {
    const normalized = utmSource.toLowerCase();

    if (normalized.includes("google")) return "Google";
    if (normalized.includes("instagram")) return "Instagram";
    if (normalized.includes("facebook")) return "Facebook";
    if (normalized.includes("bing")) return "Bing";
    if (normalized.includes("linkedin")) return "LinkedIn";

    return utmSource;
  }

  if (referrer) {
    const normalized = referrer.toLowerCase();

    if (normalized.includes("google.")) return "Google";
    if (normalized.includes("instagram.com")) return "Instagram";
    if (normalized.includes("facebook.com")) return "Facebook";
    if (normalized.includes("bing.com")) return "Bing";
    if (normalized.includes("linkedin.com")) return "LinkedIn";

    try {
      return new URL(referrer).hostname.replace(/^www\./, "");
    } catch {
      return "External referral";
    }
  }

  return "Direct / Unknown";
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          error:
            "The email service is not currently configured. Please email Justine directly.",
        },
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
    const website = cleanText(body.website, 200);

    const referrer = cleanText(body.referrer, 500);
    const landingPage = cleanText(body.landingPage, 300) || "Unknown";
    const submissionPage =
      cleanText(body.submissionPage, 300) || "/contact";
    const utmSource = cleanText(body.utmSource, 200);
    const utmMedium = cleanText(body.utmMedium, 200);
    const utmCampaign = cleanText(body.utmCampaign, 200);

    // Honeypot spam field.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Please complete your name, email address, and message.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          error: "Please include a little more information in your message.",
        },
        { status: 400 }
      );
    }

    const preferenceLabel = formatPreference(appointmentPreference);
    const sourceLabel = formatSource(utmSource, referrer);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safePreference = escapeHtml(preferenceLabel);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const safeSource = escapeHtml(sourceLabel);
    const safeReferrer = escapeHtml(referrer || "Not available");
    const safeLandingPage = escapeHtml(landingPage);
    const safeSubmissionPage = escapeHtml(submissionPage);
    const safeUtmSource = escapeHtml(utmSource || "—");
    const safeUtmMedium = escapeHtml(utmMedium || "—");
    const safeUtmCampaign = escapeHtml(utmCampaign || "—");

    const submittedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/New_York",
    }).format(new Date());

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Justine Roth Nutrition <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>New Website Inquiry</title>
          </head>

          <body style="margin:0; padding:0; background:#f6f9fb;">
            <div style="padding:32px 16px;">
              <div
                style="
                  max-width:640px;
                  margin:0 auto;
                  overflow:hidden;
                  background:#ffffff;
                  border:1px solid #e4ebf0;
                  border-radius:16px;
                "
              >
                <div
                  style="
                    padding:28px 32px;
                    background:#eaf1f5;
                    border-bottom:1px solid #dce6ed;
                  "
                >
                  <p
                    style="
                      margin:0 0 8px;
                      color:#718ca2;
                      font-family:Arial, sans-serif;
                      font-size:11px;
                      font-weight:600;
                      letter-spacing:2px;
                      text-transform:uppercase;
                    "
                  >
                    Justine Roth Nutrition
                  </p>

                  <h1
                    style="
                      margin:0;
                      color:#34414e;
                      font-family:Arial, sans-serif;
                      font-size:25px;
                      font-weight:500;
                      line-height:1.3;
                    "
                  >
                    New Website Inquiry
                  </h1>
                </div>

                <div
                  style="
                    padding:30px 32px;
                    color:#34414e;
                    font-family:Arial, sans-serif;
                  "
                >
                  <table
                    role="presentation"
                    style="
                      width:100%;
                      border-collapse:collapse;
                      font-size:15px;
                      line-height:1.6;
                    "
                  >
                    <tr>
                      <td
                        style="
                          width:165px;
                          padding:0 16px 14px 0;
                          color:#7f8a94;
                          vertical-align:top;
                        "
                      >
                        Name
                      </td>

                      <td
                        style="
                          padding:0 0 14px;
                          color:#34414e;
                          font-weight:600;
                          vertical-align:top;
                        "
                      >
                        ${safeName}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:0 16px 14px 0;
                          color:#7f8a94;
                          vertical-align:top;
                        "
                      >
                        Email
                      </td>

                      <td style="padding:0 0 14px; vertical-align:top;">
                        <a
                          href="mailto:${safeEmail}"
                          style="color:#607f96; text-decoration:none;"
                        >
                          ${safeEmail}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:0 16px 14px 0;
                          color:#7f8a94;
                          vertical-align:top;
                        "
                      >
                        Phone
                      </td>

                      <td style="padding:0 0 14px; vertical-align:top;">
                        ${safePhone}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:0 16px 14px 0;
                          color:#7f8a94;
                          vertical-align:top;
                        "
                      >
                        Appointment preference
                      </td>

                      <td style="padding:0 0 14px; vertical-align:top;">
                        ${safePreference}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          padding:0 16px 0 0;
                          color:#7f8a94;
                          vertical-align:top;
                        "
                      >
                        Submitted
                      </td>

                      <td style="padding:0; vertical-align:top;">
                        ${submittedAt} ET
                      </td>
                    </tr>
                  </table>

                  <div
                    style="
                      margin-top:28px;
                      padding-top:24px;
                      border-top:1px solid #e4ebf0;
                    "
                  >
                    <p
                      style="
                        margin:0 0 10px;
                        color:#7f8a94;
                        font-size:13px;
                        font-weight:600;
                        letter-spacing:1px;
                        text-transform:uppercase;
                      "
                    >
                      Message
                    </p>

                    <div
                      style="
                        color:#34414e;
                        font-size:16px;
                        line-height:1.75;
                      "
                    >
                      ${safeMessage}
                    </div>
                  </div>

                  <div
                    style="
                      margin-top:28px;
                      padding:20px;
                      background:#f6f9fb;
                      border:1px solid #e4ebf0;
                      border-radius:12px;
                    "
                  >
                    <p
                      style="
                        margin:0 0 14px;
                        color:#7f8a94;
                        font-size:12px;
                        font-weight:600;
                        letter-spacing:1px;
                        text-transform:uppercase;
                      "
                    >
                      Inquiry Source
                    </p>

                    <table
                      role="presentation"
                      style="
                        width:100%;
                        border-collapse:collapse;
                        font-size:13px;
                        line-height:1.6;
                      "
                    >
                      <tr>
                        <td
                          style="
                            width:125px;
                            padding:0 12px 7px 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          Source
                        </td>

                        <td
                          style="
                            padding:0 0 7px;
                            color:#34414e;
                            font-weight:600;
                            vertical-align:top;
                          "
                        >
                          ${safeSource}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:0 12px 7px 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          Referrer
                        </td>

                        <td
                          style="
                            padding:0 0 7px;
                            color:#526d83;
                            vertical-align:top;
                          "
                        >
                          ${safeReferrer}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:0 12px 7px 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          Landing page
                        </td>

                        <td style="padding:0 0 7px; vertical-align:top;">
                          ${safeLandingPage}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:0 12px 7px 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          Submitted from
                        </td>

                        <td style="padding:0 0 7px; vertical-align:top;">
                          ${safeSubmissionPage}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:0 12px 7px 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          UTM source
                        </td>

                        <td style="padding:0 0 7px; vertical-align:top;">
                          ${safeUtmSource}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:0 12px 7px 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          UTM medium
                        </td>

                        <td style="padding:0 0 7px; vertical-align:top;">
                          ${safeUtmMedium}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding:0 12px 0 0;
                            color:#8a98a3;
                            vertical-align:top;
                          "
                        >
                          UTM campaign
                        </td>

                        <td style="padding:0; vertical-align:top;">
                          ${safeUtmCampaign}
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div style="margin-top:30px;">
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        display:inline-block;
                        padding:12px 20px;
                        background:#718ca2;
                        border-radius:999px;
                        color:#ffffff;
                        font-size:14px;
                        font-weight:600;
                        text-decoration:none;
                      "
                    >
                      Reply to ${safeName}
                    </a>
                  </div>
                </div>

                <div
                  style="
                    padding:18px 32px;
                    background:#f8fafb;
                    border-top:1px solid #e4ebf0;
                    color:#8a98a3;
                    font-family:Arial, sans-serif;
                    font-size:12px;
                    line-height:1.6;
                  "
                >
                  This message was submitted through the contact form on
                  Justine Roth Nutrition.
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: [
        "NEW WEBSITE INQUIRY",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Appointment preference: ${preferenceLabel}`,
        `Submitted: ${submittedAt} ET`,
        "",
        "MESSAGE",
        message,
        "",
        "INQUIRY SOURCE",
        `Source: ${sourceLabel}`,
        `Referrer: ${referrer || "Not available"}`,
        `Landing page: ${landingPage}`,
        `Submitted from: ${submissionPage}`,
        `UTM source: ${utmSource || "—"}`,
        `UTM medium: ${utmMedium || "—"}`,
        `UTM campaign: ${utmCampaign || "—"}`,
        "",
        `Reply directly to: ${email}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error:
            "Your message could not be sent. Please try again or contact Justine directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error:
          "Your message could not be sent. Please try again or contact Justine directly.",
      },
      { status: 500 }
    );
  }
}
