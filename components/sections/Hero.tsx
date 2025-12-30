import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Dastak Band Live"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          DASTAK BAND
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Raw. Real. Resonating. High-energy Hindi Indie Rock & Pop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
            Watch Live
          </Button>
        </div>
      </div>
    </section>
  )
}
