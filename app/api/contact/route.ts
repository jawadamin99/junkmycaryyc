import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const vehicleDetails = String(formData.get("vehicleYear") || "");
    const condition = String(formData.get("condition") || "");
    const city = String(formData.get("city") || "");
    const message = String(formData.get("message") || "");
    const pageUrl = String(formData.get("pageUrl") || "");

    const forwardedFor = req.headers.get("x-forwarded-for") || "";
    const realIp = req.headers.get("x-real-ip") || "";
    const ipAddress = forwardedFor.split(",")[0].trim() || realIp || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const to = process.env.CONTACT_TO || "example@example.com";
    const from = process.env.CONTACT_FROM || "example@example.com";
    const cc = process.env.CONTACT_CC || undefined;

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER || "dummy@gmail.com",
        pass: process.env.SMTP_PASS || "dummy-password",
      },
    });

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:24px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #dbe3ef;">
          <div style="background:#0757B8; color:#ffffff; padding:18px 24px;">
            <div style="font-size:18px; font-weight:700;">Junk My Car YYC</div>
            <div style="font-size:12px; opacity:0.9;">New quote request</div>
          </div>
          <div style="padding:20px 24px;">
            <h2 style="margin:0 0 12px; font-size:18px; color:#111827;">Lead Details</h2>
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr><td style="padding:8px 0; color:#6b7280; width:160px;">Name</td><td style="padding:8px 0; color:#111827; font-weight:600;">${escapeHtml(name) || "-"}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Phone</td><td style="padding:8px 0; color:#111827; font-weight:600;">${escapeHtml(phone) || "-"}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Email</td><td style="padding:8px 0; color:#111827; font-weight:600;">${escapeHtml(email) || "-"}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Vehicle</td><td style="padding:8px 0; color:#111827; font-weight:600;">${escapeHtml(vehicleDetails) || "-"}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Condition</td><td style="padding:8px 0; color:#111827; font-weight:600;">${escapeHtml(condition) || "-"}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">City / Area</td><td style="padding:8px 0; color:#111827; font-weight:600;">${escapeHtml(city) || "-"}</td></tr>
            </table>
            <div style="margin-top:16px; padding:12px; background:#f9fafb; border-radius:8px; border:1px solid #e5e7eb;">
              <div style="font-size:12px; color:#6b7280; margin-bottom:6px;">Additional Information</div>
              <div style="white-space:pre-wrap; color:#111827; font-size:14px;">${escapeHtml(message) || "-"}</div>
            </div>
            <div style="margin-top:16px; padding:12px; background:#f4f6f8; border-radius:8px; border:1px solid #e5e7eb;">
              <div style="font-size:12px; color:#6b7280; margin-bottom:6px;">Submission Metadata</div>
              <div style="font-size:13px; color:#111827;">
                <div><strong>IP Address:</strong> ${escapeHtml(ipAddress)}</div>
                <div><strong>Browser:</strong> ${escapeHtml(userAgent)}</div>
                <div><strong>Page URL:</strong> ${escapeHtml(pageUrl) || "-"}</div>
              </div>
            </div>
          </div>
          <div style="padding:14px 24px; background:#f4f6f8; font-size:12px; color:#6b7280;">
            This email was generated from the Junk My Car YYC website form.
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Junk My Car YYC" <${from}>`,
      replyTo: email || from,
      to,
      cc,
      subject: "Junk My Car YYC Quote Request",
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "-"}`,
        `Vehicle: ${vehicleDetails}`,
        `Condition: ${condition}`,
        `City / Area: ${city}`,
        `Message: ${message}`,
        "",
        "Submission Metadata:",
        `IP Address: ${ipAddress}`,
        `Browser: ${userAgent}`,
        `Page URL: ${pageUrl || "-"}`,
      ].join("\n"),
      html,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Email send failed", {
      message: error instanceof Error ? error.message : String(error),
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: !!process.env.SMTP_USER,
      pass: !!process.env.SMTP_PASS,
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      cc: process.env.CONTACT_CC,
    });

    return Response.json({ ok: false }, { status: 500 });
  }
}
