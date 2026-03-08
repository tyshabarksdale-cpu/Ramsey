
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Client Reflection",
    text: "From the very beginning you're greeted with a smile and genuine enthusiasm — Sybil's infectious energy sets the tone. After a grueling week, these sessions are a welcomed opportunity to offload and refuel.",
    title: "Executive Professional"
  },
  {
    name: "Legacy Career Transition",
    text: "I am appreciative of Sybil's ability to delve into my thoughts and help me identify what is most important for my professional growth as I enter the last 4-5 years of my career.",
    title: "Senior Leader"
  },
  {
    name: "Personal Growth Journey",
    text: "Sybil's transparency and willingness to share her own flaws helped me lower my guard. She was relatable — as if I were talking to a trusted friend and ally.",
    title: "Coaching Client"
  }
]

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "about-sybil")

  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start mb-16 sm:mb-24 max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl w-full grayscale transition-all duration-700 hover:grayscale-0">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint="professional woman smiling"
              />
            )}
          </div>
          <div className="space-y-8 sm:space-y-10 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mx-auto">
                Meet Sybil Elise
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-4 tracking-tight">
                Empowerment Strategist
              </h1>
            </div>
            
            <div className="prose prose-lg text-primary space-y-6 max-w-none text-center">
              <p className="text-xl sm:text-2xl font-headline italic tracking-wide leading-relaxed">
                I am not an executive coach. <br /> I am an Empowerment Strategist.
              </p>
              <div className="text-base sm:text-lg space-y-4">
                <p>
                  With decades of professional experience and a deep commitment to the growth of others, 
                  I established Ramsey Empowerment Coaching in 2025. My mission is simple but profound: 
                  to create a safe haven for those seeking to reclaim their agency.
                </p>
                <p>
                  Having spent over 30 years in corporate settings — often as the only woman and the only 
                  person of color in the room — I bring a unique and lived perspective to my clients, 
                  especially women and women of color. I understand the nuances of career transitions, 
                  the weight of unspoken expectations, and the incredible power of a voice rediscovered.
                </p>
              </div>
              <p className="font-headline text-lg sm:text-xl italic bg-secondary/30 p-6 sm:p-8 rounded-2xl border-l-4 border-accent text-center">
                "Think of our work together like riding a tandem bike. You're in the front seat — steering, 
                deciding the direction, owning the destination. I'm right behind you, pedaling alongside 
                you, help power the journey. That's what I mean when I say, 'You steer as we pedal.'"
              </p>
              <div className="text-base sm:text-lg space-y-4">
                <p>
                  This isn't my journey. It's yours. I'm just honored to ride with you. Whether you're navigating 
                  phased retirement, a career pivot, or simply looking to find your unapologetically authentic 
                  self, I am here to provide the momentum and the map.
                </p>
                <div className="pt-4">
                  <p className="text-muted-foreground italic font-medium">
                    Empowering women and professionals to recognize their strength and step into their power. <br />
                    Based in the Louisville (Kentuckiana) area, serving clients everywhere.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 text-center">
              <div className="space-y-2">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Certification</span>
                <span className="font-bold text-lg sm:text-xl text-primary">Certified Leadership Coach</span>
              </div>
              <div className="space-y-2">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Expertise</span>
                <span className="font-bold text-lg sm:text-xl text-primary">35+ Years Professional Experience</span>
              </div>
              <div className="space-y-2">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Strategy</span>
                <span className="font-bold text-lg sm:text-xl text-primary">Purpose-Driven Planning</span>
              </div>
              <div className="space-y-2">
                <span className="block text-primary text-xs font-bold uppercase tracking-widest">Advocacy</span>
                <span className="font-bold text-lg sm:text-xl text-primary">Your Encourager & Cheerleader</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/20 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-20 max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-headline font-bold text-primary pb-4">Voices of Transformation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-background/80 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full text-center">
                  <p className="text-base sm:text-lg italic text-primary/80 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-primary text-base">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-accent font-bold uppercase tracking-widest mt-1">{t.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
