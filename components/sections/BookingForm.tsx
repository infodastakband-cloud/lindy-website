"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log("Submitting form...", data)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Booking request sent successfully!")
        ;(event.target as HTMLFormElement).reset()
      } else {
        const errorData = await response.json()
        console.error("Server error:", errorData)
        throw new Error(errorData.error || "Failed to send booking request")
      }
    } catch (error: unknown) {
      console.error("Submission error:", error)
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again."
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Secure Your Date</CardTitle>
            <p className="text-gray-500 mt-2">Fill out the form below to book Dastak Band for your event.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input name="phone" placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Event Date</label>
                <Input name="eventDate" type="date" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Event Type</label>
                <Input name="eventType" placeholder="College Fest, Corporate, Wedding" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Venue / City</label>
                <Input name="venue" placeholder="New Delhi" required />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium">Message (Optional)</label>
                <Textarea name="message" placeholder="Tell us more about your event..." rows={4} />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full py-6 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Booking Request"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
