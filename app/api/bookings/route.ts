export const dynamic = "force-dynamic";
import { prisma } from "@/lib/db"
import { resend } from "@/lib/resend"
import { BookingNotification } from "@/components/emails/BookingNotification"
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

    // 2. Send email notification
    try {
      await resend.emails.send({
        from: 'Dastak Band <onboarding@resend.dev>', // You can change this once you verify your domain
        to: 'infodastakband@gmail.com',
        subject: `New Booking Inquiry: ${name} - ${eventDate}`,
        react: BookingNotification({
          name,
          email,
          phone,
          eventDate,
          eventType,
          venue,
          message,
        }),
      });
    } catch (emailError) {
      // We log the email error but don't fail the whole request since the DB save succeeded
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error("Booking error details:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
