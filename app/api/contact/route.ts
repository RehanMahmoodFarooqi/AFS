import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "re_your_api_key_here") {
      // Resend not configured — silently succeed so the site still builds & runs
      console.warn("RESEND_API_KEY not set. Email not sent.");
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "AFS Contact Form <onboarding@resend.dev>",
      to: ["info@afsdevelopment.com"],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
          <h2 style="color:#1e40af;margin-bottom:4px;">New Contact Form Submission</h2>
          <p style="color:#6b7280;font-size:14px;margin-top:0;">Received via afsdevelopment.com</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#374151;font-weight:bold;width:100px;">Name</td>
              <td style="padding:8px 0;color:#111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#374151;font-weight:bold;">Email</td>
              <td style="padding:8px 0;color:#111827;"><a href="mailto:${email}" style="color:#1e40af;">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
          <p style="color:#374151;font-weight:bold;margin-bottom:8px;">Message</p>
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#111827;line-height:1.6;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
          <p style="color:#9ca3af;font-size:12px;margin-top:24px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
