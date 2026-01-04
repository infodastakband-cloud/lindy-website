import * as React from 'react';

interface BookingNotificationProps {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  venue: string;
  message?: string;
}

export const BookingNotification: React.FC<Readonly<BookingNotificationProps>> = ({
  name,
  email,
  phone,
  eventDate,
  eventType,
  venue,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
    <h1 style={{ color: '#000' }}>New Booking Inquiry</h1>
    <p>You have received a new booking request from the website.</p>
    
    <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Event Date:</strong> {eventDate}</p>
      <p><strong>Event Type:</strong> {eventType}</p>
      <p><strong>Venue:</strong> {venue}</p>
      {message && <p><strong>Message:</strong> {message}</p>}
    </div>
    
    <p style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
      This email was sent from your Dastak Band website booking form.
    </p>
  </div>
);
