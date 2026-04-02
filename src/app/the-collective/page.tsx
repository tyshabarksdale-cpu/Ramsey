"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const collectiveMembers = [
  {
    name: "GirlTrek",
    tagline: "Healing & Self-Care",
    description: "A national movement that mobilizes Black women and girls to reclaim their health, find their voice, and step into their power together.",
    link: "https://www.girltrek.org",
    image: PlaceHolderImages.find(img => img.id === "girltrek-image")
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
    link: "https://www.taylorleadershipcoaching.com/",
    image: PlaceHolderImages.find(img => img.id === "collective-1")
  }
]

export default function TheCollective() {
  return (
    <div className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 space-y-2 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-6">The Collective</h1>
          <p className="text-xl sm:text-2xl text-primary font-headline italic leading-relaxed tracking-wide opacity-80">
            Empowerment grows in community. The Collective features women and organizations who share 
            our commitment to creating safe, supportive spaces where people feel heard, valued, and 
            empowered to step into their power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
          {collectiveMembers.map((member, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-lg group text-center flex flex-col h-full bg-white rounded-none">
              <motion.div 
                initial={{ filter: 'grayscale(100%)' }}
                whileInView={{ filter: 'grayscale(0%)' }}
                whileHover={{ filter: 'grayscale(0%)' }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative aspect-video overflow-hidden"
              >
                {member.image && (
                  <Image
                    src={member.image.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="diverse women empowering each other"
                  />
                )}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <CardContent className="p-8 sm:p-10 space-y-4 flex flex-col flex-1">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-headline font-bold text-primary pb-4">{member.name}</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-accent uppercase tracking-widest">{member.tagline}</p>
                </div>
                <p className="text-sm sm:text-base text-primary/70 leading-relaxed flex-1">
                  {member.description}
                </p>
                <div className="pt-4">
                  <Button variant="outline" className="w-full sm:w-auto rounded-none border-primary/20 text-primary hover:text-primary active:text-primary hover:bg-primary/5 active:bg-primary/10 font-bold uppercase tracking-widest text-[10px] sm:text-xs px-8" asChild>
                    <a href={member.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 p-6 sm:p-8 lg:p-10 bg-ombre-light text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-primary pb-2">Join the Momentum</h2>
          <p className="text-base sm:text-lg text-primary/80 max-w-2xl mx-auto italic font-headline tracking-wide">
            We are always looking to partner with individuals and organizations who prioritize 
            compassionate advocacy and genuine empowerment.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto rounded-none bg-primary text-white font-bold px-10 h-12 sm:h-14 shadow-lg uppercase tracking-widest text-[10px] sm:text-xs font-headline">
            <Link href="/connect">Join the Collective</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
