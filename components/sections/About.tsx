import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">The Sound of Dastak</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dastak Band is a high-energy Hindi Indie artist collective that blends heartfelt storytelling with the raw, rebellious energy of rock and pop. Led by Akarsh Sahay, the band creates an expressive crossover sound where Indian melodic sensibilities meet Western alternative rock.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 20 years of stage experience, Dastak has performed at prestigious venues like Rashtrapati Bhawan and opened for legendary artists like Javed Ali, Sonu Nigam, and B Praak.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-none bg-gray-50">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-gray-50">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Live Shows</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-gray-50">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold mb-2">IIT</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Delhi Roots</p>
              </CardContent>
            </Card>
            <Card className="border-none bg-gray-50">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold mb-2">TV</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">National Presence</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
