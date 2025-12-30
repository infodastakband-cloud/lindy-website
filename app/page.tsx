import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { BandMembers } from "@/components/sections/BandMembers"
import { Performance } from "@/components/sections/Performance"
import { BookingForm } from "@/components/sections/BookingForm"
import { Toaster } from "@/components/ui/sonner"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Dastak Logo" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl tracking-tighter">DASTAK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#members" className="hover:text-black transition-colors">Band</a>
            <a href="#booking" className="hover:text-black transition-colors">Book Now</a>
          </div>
        </div>
      </nav>

      <Hero />
      <div id="about"><About /></div>
      <div id="members"><BandMembers /></div>
      <Performance />
      <BookingForm />

      <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Image src="/images/logo.png" alt="Dastak Logo" width={32} height={32} className="rounded-full" />
            <span className="font-bold text-lg tracking-tighter">DASTAK BAND</span>
          </div>
          <p className="text-gray-500 text-sm mb-8">
            Raw. Real. Resonating. High-energy Hindi Indie Rock & Pop.
          </p>
          <div className="flex justify-center gap-6 text-gray-400 mb-8">
            <a href="https://www.instagram.com/akarshsahay/" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://open.spotify.com/artist/5DUELRrlNCZJVzpPDviyOA" className="hover:text-black transition-colors">Spotify</a>
            <a href="mailto:infodastakband@gmail.com" className="hover:text-black transition-colors">Email</a>
          </div>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Dastak Band. All rights reserved.
          </p>
        </div>
      </footer>
      <Toaster />
    </main>
  )
}
