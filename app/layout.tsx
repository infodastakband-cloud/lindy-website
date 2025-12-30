import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dastak Band | Official Booking & EPK",
  description: "Book Dastak Band for your next event. High-energy Hindi Indie Rock & Pop led by Akarsh Sahay. Experience raw, real, and resonating live music.",
  openGraph: {
    title: "Dastak Band | Official Booking & EPK",
    description: "High-energy Hindi Indie Rock & Pop led by Akarsh Sahay. Book now for college fests, corporate shows, and private events.",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
