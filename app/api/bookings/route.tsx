export const dynamic = "force-dynamic";
import { prisma } from "@/lib/db"
import { resend } from "@/lib/resend"
import { BookingNotification } from "@/components/emails/BookingNotification"
import { NextResponse } from "next/server"
import * as React from "react"

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

    // 2. Send email notification
    try {
      const { data, error: resendError } = await resend.emails.send({
        from: 'Dastak Band <onboarding@resend.dev>',
        to: 'infodastakband@gmail.com',
        subject: `New Booking Inquiry: ${name} - ${eventDate}`,
        react: (
          <BookingNotification
            name={name}
            email={email}
            phone={phone}
            eventDate={eventDate}
            eventType={eventType}
            venue={venue}
            message={message}
          />
        ),
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
