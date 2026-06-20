import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@ioconsults.com.ng";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const VALID_SERVICES = new Set([
  "People and Culture Transformation",
  "Recruitment",
  "Performance Management",
  "Compensation and Benefit Management",
  "General HR Advisory and Support",
]);

// Simple in-memory rate limit per server instance: 5 requests / 10 min / IP.
// Note: this resets on redeploy/cold start and is per-instance, so it's a
// basic deterrent rather than a hard guarantee — fine for a low-traffic
// marketing site contact form.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { firstName, lastName, company, email, service, message, website } = body;

    // Honeypot — if filled, silently accept (don't tip off the bot) but never send
    if (typeof website === "string" && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    // Validation
    if (
      typeof firstName !== "string" || firstName.trim().length === 0 || firstName.length > 100 ||
      typeof lastName !== "string" || lastName.trim().length === 0 || lastName.length > 100 ||
      typeof email !== "string" || email.length > 254 ||
      typeof message !== "string" || message.trim().length === 0 || message.length > 5000
    ) {
      return NextResponse.json({ error: "Please fill in all required fields correctly." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (typeof service !== "string" || !VALID_SERVICES.has(service)) {
      return NextResponse.json({ error: "Please select a valid service." }, { status: 400 });
    }

    if (company !== undefined && (typeof company !== "string" || company.length > 200)) {
      return NextResponse.json({ error: "Invalid company name." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const safe = {
      firstName: escapeHtml(firstName.trim()),
      lastName: escapeHtml(lastName.trim()),
      company: company ? escapeHtml(company.trim()) : "—",
      email: escapeHtml(email.trim()),
      service: escapeHtml(service),
      message: escapeHtml(message.trim()).replace(/\n/g, "<br />"),
    };

    await resend.emails.send({
      from: `IOCONSULTS Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      reply_to: email.trim(),
      subject: `New enquiry: ${safe.service} — ${safe.firstName} ${safe.lastName}`,
      html: `
        <div style="font-family: Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0F1A14;">
          <div style="background-color: #13261F; padding: 24px 32px;">
            <span style="color: #F7F4ED; font-size: 20px; font-weight: 600; letter-spacing: 0.02em;">IOCONSULTS</span>
          </div>
          <div style="padding: 32px; background-color: #F7F4ED;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: #C9A227; margin: 0 0 16px;">
              New Website Enquiry
            </p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #5B6B5E; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0;">${safe.firstName} ${safe.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #5B6B5E; vertical-align: top;">Company</td>
                <td style="padding: 8px 0;">${safe.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #5B6B5E; vertical-align: top;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${safe.email}" style="color: #13261F;">${safe.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #5B6B5E; vertical-align: top;">Service</td>
                <td style="padding: 8px 0;">${safe.service}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #D9D3C3;">
              <p style="color: #5B6B5E; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 8px;">Message</p>
              <p style="font-size: 14px; line-height: 1.6; margin: 0;">${safe.message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background-color: #13261F; color: #F7F4ED99; font-size: 11px;">
            Sent from the IOCONSULTS website contact form.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
