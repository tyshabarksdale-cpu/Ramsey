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
    <div className="py-6 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-10 items-start mb-8 max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] overflow-hidden shadow-2xl w-full grayscale">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint="professional woman smiling black and white"
              />
            )}
          </div>
          <div className="space-y-4 sm:space-y-6 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mx-auto">
                Meet Sybil Elise Ramsey
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-6 tracking-tight">
                Empowerment Strategist
              </h1>
            </div>
            
            <div className="prose prose-lg text-primary space-y-4 max-w-none text-center">
              <div className="text-base sm:text-lg space-y-3">
                <p>
                  With decades of professional experience and a deep commitment to the growth of others, 
                  I established Ramsey Empowerment Collective in 2025. My mission is simple but profound: 
                  to give you a room to think out loud without judgment — and the momentum to act on what you discover.
                </p>
                <p>
                  Having spent over 30 years in corporate settings — often as the only woman and the only 
                  person of color in the room — I bring a unique and lived perspective to my clients, 
                  especially women and women of color. I understand the nuances of career transitions, 
                  the weight of unspoken expectations, and the incredible power of a voice rediscovered.
                </p>
              </div>
              <div className="bg-secondary/30 p-8 sm:p-10 border-l-4 border-accent text-center space-y-4 shadow-sm">
                <div className="pt-2">
                  <p className="font-bold text-accent text-sm sm:text-base uppercase tracking-widest leading-relaxed">
                    You set the direction;<br />I help you get there.
                  </p>
                </div>
              </div>
              <div className="text-base sm:text-lg space-y-3">
                <p>
                  This is your journey. I'm honored to ride with you. <br />
                  Whether you're stepping into your leadership presence, navigating a career pivot, or 
                  embracing your most unapologetically authentic self — I'm here to provide the momentum and the map.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/20 p-8 sm:p-12 lg:p-14 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-headline font-bold text-primary pb-6">Voices of Transformation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-background/80 border-none shadow-sm hover:shadow-md transition-shadow h-full rounded-none">
                <CardContent className="p-8 sm:p-10 space-y-4 flex flex-col justify-between h-full text-center">
                  <p className="text-base sm:text-lg italic text-primary/80 leading-relaxed">{t.text}</p>
                  <div>
                    <p className="font-bold text-primary text-base pb-1">{t.name}</p>
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
