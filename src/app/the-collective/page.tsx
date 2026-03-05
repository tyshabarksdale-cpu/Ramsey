
"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const collectiveMembers = [
  {
    name: "GirlTrek",
    tagline: "Healing & Self-Care",
    description: "A national movement that mobilizes Black women and girls to reclaim their health, find their voice, and step into their power together.",
    link: "https://www.girltrek.org",
    image: PlaceHolderImages.find(img => img.id === "collective-1")
  },
  {
    name: "Evolve Women's Network",
    tagline: "Louisville-Based Community",
    description: "Creating safe, supportive spaces where women—especially women of color—feel heard, valued, and empowered to show up boldly.",
    link: "https://evolvewomensnetwork.com",
    image: PlaceHolderImages.find(img => img.id === "collective-2")
  },
  {
    name: "Taylor Your Leadership Coaching",
    tagline: "ICF-Certified Advocacy",
    description: "Dedicated to helping leaders break free from limiting beliefs and embrace their authentic voice in a safe and supportive environment.",
    link: "https://taylorleadershipcoaching.com",
    image: PlaceHolderImages.find(img => img.id === "collective-1")
  }
]

export default function TheCollective() {
  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest">
            Community & Growth
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-1">The Collective</h1>
          <p className="text-xl sm:text-2xl text-primary font-headline italic leading-relaxed tracking-wide opacity-80">
            "Empowerment grows in community. The Collective features women and organizations who share 
            our commitment to creating safe, supportive spaces where people feel heard, valued, and 
            empowered to step into their power."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {collectiveMembers.map((member, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg group text-center flex flex-col h-full bg-white">
              <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                {member.image && (
                  <Image
                    src={member.image.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="diverse women empowering each other"
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-8 sm:p-10 space-y-6 flex flex-col flex-1">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary">{member.name}</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-widest">{member.tagline}</p>
                </div>
                <p className="text-sm sm:text-base text-primary/70 leading-relaxed flex-1">
                  {member.description}
                </p>
                <div className="pt-6">
                  <Button variant="outline" className="w-full sm:w-auto rounded-full border-primary/20 text-primary hover:bg-primary/5 font-bold uppercase tracking-widest text-[10px] sm:text-xs px-8" asChild>
                    <a href={member.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 p-8 sm:p-12 lg:p-20 bg-ombre-light rounded-[2rem] sm:rounded-[3rem] text-center space-y-8 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-headline font-bold text-primary">Join the Momentum</h2>
          <p className="text-lg sm:text-xl text-primary/80 max-w-2xl mx-auto italic font-headline tracking-wide">
            We are always looking to partner with individuals and organizations who prioritize 
            compassionate advocacy and genuine empowerment.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-primary text-white font-bold px-10 h-14 sm:h-16 shadow-lg uppercase tracking-widest text-[10px] sm:text-xs font-headline">
            <Link href="/connect">Inquire About Membership</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
