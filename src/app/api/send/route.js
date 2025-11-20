import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "saungeaindraymin@gmail.com",
      subject: "New Contact Form Message",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border:1px solid #e0e0e0; border-radius:10px; overflow:hidden;">
        <div style="background-color:#4f46e5; color:#fff; padding:20px; text-align:center;">
          <h1 style="margin:0; font-size:24px;">New Contact Message</h1>
        </div>
        <div style="padding:20px; color:#333;">
          <p style="margin:5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin:5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin:15px 0 5px 0;"><strong>Message:</strong></p>
          <p style="margin:5px 0; line-height:1.5; background:#f3f3f3; padding:10px; border-radius:5px;">${message}</p>
          <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />
          <p style="font-size:12px; color:#888; text-align:center;">This message was sent from your website contact form.</p>
        </div>
      </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
