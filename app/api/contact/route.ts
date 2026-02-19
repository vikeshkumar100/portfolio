import { NextResponse } from "next/server"

const contactTo = "vikeshkapoor100@gmail.com"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
    const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      )
    }

    const emailRes = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
            to_email: contactTo,
          },
        }),
      }
    )

    if (!emailRes.ok) {
      const errorText = await emailRes.text()
      return NextResponse.json(
        {
          error: "EmailJS API error",
          details: errorText || `Status ${emailRes.status}`,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
