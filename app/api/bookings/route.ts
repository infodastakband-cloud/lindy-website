export const dynamic = "force-dynamic";
import { prisma } from "@/lib/db"
import { resend } from "@/lib/resend"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, eventDate, eventType, venue, message } = body

    // 1. Save to database
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        eventDate: new Date(eventDate),
        eventType,
        venue,
        message,
      },
    })

    // 2. Send email notification using a plain HTML string
    // This avoids React rendering issues in the server environment
    try {
      const emailHtml = `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px;">
          <h1 style="color: #000; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">New Booking Inquiry</h1>
          <p>You have received a new booking request from the website.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; mt: 20px; border: 1px solid #eee;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Event Date:</strong> ${eventDate}</p>
            <p style="margin: 10px 0;"><strong>Event Type:</strong> ${eventType}</p>
            <p style="margin: 10px 0;"><strong>Venue:</strong> ${venue}</p>
            ${message ? `<p style="margin: 10px 0; border-top: 1px solid #eee; pt: 10px;"><strong>Message:</strong><br/>${message}</p>` : ''}
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            This email was sent from your Dastak Band website booking form.
          </p>
        </div>
      `;

      const { data, error: resendError } = await resend.emails.send({
        from: 'Dastak Band <onboarding@resend.dev>',
        to: 'infodastakband@gmail.com',
        subject: `New Booking Inquiry: ${name} - ${eventDate}`,
        html: emailHtml,
      });

      if (resendError) {
        console.error("Resend API Error:", resendError);
      } else {
        console.log("Email sent successfully:", data);
      }
    } catch (emailError) {
      console.error("Failed to send email notification (exception):", emailError);
    }

    return NextResponse.json(booking, { status: 201 })
  } catch (error: unknown) {
    console.error("Booking error details:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
