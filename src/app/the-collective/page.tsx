import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"

const collectiveMembers = [
  {
    name: "Wisdom Works",
    tagline: "Cultivating leadership in later life",
    description: "A community focused on helping professionals over 55 find meaning and impact in their legacy years.",
    image: PlaceHolderImages.find(img => img.id === "collective-1"),
    link: "#"
  },
  {
    name: "Vocalize advocacy",
    tagline: "Your voice, amplified",
    description: "An organization providing tools and training for women of color to advocate for themselves in corporate environments.",
    image: PlaceHolderImages.find(img => img.id === "collective-2"),
    link: "#"
  },
  {
    name: "Empowered Philadelphia",
    tagline: "Local impact, global change",
    description: "Connecting local empowerment leaders to resources and collaborative opportunities.",
    image: PlaceHolderImages.find(img => img.id === "collective-1"), // Reusing for placeholder
    link: "#"
  }
]

export default function TheCollective() {
  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest">
            Community & Growth
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-1">The Collective</h1>
          <p className="text-2xl text-primary font-headline italic leading-relaxed tracking-wide opacity-80">
            "Empowerment grows in community. The Collective features women and organizations who share 
            our commitment to creating safe, supportive spaces where people feel heard, valued, and 
            empowered to step into their power."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectiveMembers.map((member, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg group text-center">
              <div className="relative aspect-video overflow-hidden">
                {member.image && (
                  <Image
                    src={member.image.imageUrl}
                    alt={member.image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={member.image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <a href={member.link} className="text-primary-foreground font-bold hover:underline tracking-widest uppercase text-xs">
                    Visit Website
                  </a>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-1 text-primary">{member.name}</h3>
                  <p className="text-sm font-bold text-primary/70 uppercase tracking-widest">{member.tagline}</p>
                </div>
                <p className="text-primary/80 leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 p-12 bg-secondary/30 rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-1">Want to join The Collective?</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto italic font-headline tracking-wide">
            We are always looking to partner with individuals and organizations who prioritize 
            compassionate advocacy and genuine empowerment.
          </p>
          <a href="/connect" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full transition-all hover:bg-primary/90 uppercase tracking-[0.2em] text-xs">
            Inquire About Membership
          </a>
        </div>
      </div>
    </div>
  )
}