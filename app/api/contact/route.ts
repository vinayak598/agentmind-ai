import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_MVGSutBQ_EXESNEwXjzmVReveff1LPZya");

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "AgentMind AI <onboarding@resend.dev>",
      to: "vinayak.jvr@agentmindai.online",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
