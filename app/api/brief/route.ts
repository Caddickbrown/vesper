import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { name, email, package: pkg, brief } = body;

  if (!name || !email || !brief) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Vesper <briefs@buildwithvesper.com>",
      to: "clawrence@caddickbrown.com",
      replyTo: email,
      subject: `New brief from ${name}${pkg && pkg !== "" ? ` — ${pkg}` : ""}`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#fff;">
          <p style="color:#666;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:24px;">New brief via buildwithvesper.com</p>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="color:#666;padding:8px 0;border-bottom:1px solid #1a1a1a;width:120px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #1a1a1a;">${name}</td></tr>
            <tr><td style="color:#666;padding:8px 0;border-bottom:1px solid #1a1a1a;">Email</td><td style="padding:8px 0;border-bottom:1px solid #1a1a1a;"><a href="mailto:${email}" style="color:#fff;">${email}</a></td></tr>
            ${pkg ? `<tr><td style="color:#666;padding:8px 0;border-bottom:1px solid #1a1a1a;">Package</td><td style="padding:8px 0;border-bottom:1px solid #1a1a1a;">${pkg}</td></tr>` : ""}
          </table>
          <p style="color:#666;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;">Brief</p>
          <p style="line-height:1.7;color:#ccc;white-space:pre-wrap;">${brief}</p>
          <p style="margin-top:32px;color:#333;font-size:11px;">Reply to this email to respond directly to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
