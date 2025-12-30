import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const members = [
  {
    name: "Akarsh Sahay",
    role: "Lead Singer & Guitarist",
    description: "IIT Delhi Alumnus, 20+ years experience, performed at Rashtrapati Bhawan.",
    image: "/images/members/akarsh.png"
  },
  {
    name: "Anuj Yadav",
    role: "Keyboardist / Synth",
    description: "1000+ live performances worldwide, opened for Sonu Nigam and B Praak.",
    image: "/images/members/anuj.png"
  },
  {
    name: "Sarthak Dutta",
    role: "Bass Guitarist",
    description: "10+ years experience, performed at Sadhguru's Save Soil Campaign.",
    image: "/images/members/sarthak.png"
  },
  {
    name: "Nikhil Allan Lakra",
    role: "Lead Guitarist",
    description: "Professional guitarist and music educator known for expressive phrasing.",
    image: "/images/members/nikhil.png"
  },
  {
    name: "Advin",
    role: "Drummer",
    description: "Trinity College London certified, performed at Hard Rock Cafe and The Piano Man.",
    image: "/images/members/advin.png"
  }
]

export function BandMembers() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">The Collective</h2>
          <p className="text-lg text-gray-600">A powerhouse of professional musicians with global experience.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {members.map((member) => (
            <Card key={member.name} className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-xs font-medium text-primary uppercase tracking-wider">{member.role}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-gray-600 text-xs leading-relaxed">
                {member.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
