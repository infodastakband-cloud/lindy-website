import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, eventDate, eventType, venue, message } = body

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

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
