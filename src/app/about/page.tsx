
"use client"

import { useState } from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

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
  const [isActivated, setIsActivated] = useState(false)
  const bioImage = PlaceHolderImages.find(img => img.id === "sybil-hero")

  return (
    <div className="py-6 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-12 items-center mb-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ filter: 'grayscale(100%)' }}
            animate={{ filter: isActivated ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onMouseEnter={() => setIsActivated(true)}
            onClick={() => setIsActivated(true)}
            onTouchStart={() => setIsActivated(true)}
            onViewportEnter={() => setIsActivated(true)}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[3/4] overflow-hidden shadow-2xl w-full rounded-none cursor-pointer"
          >
            {bioImage && (
              <Image
                src={bioImage.imageUrl}
                alt={bioImage.description}
                fill
                className="object-cover"
                data-ai-hint="professional portrait"
                priority
              />
            )}
          </motion.div>
          <div className="space-y-6 sm:space-y-8 text-center flex flex-col items-center justify-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mx-auto">
                Meet Sybil Elise Ramsey
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-bold text-primary pb-2 tracking-tight">
                Empowerment Strategist
              </h1>
            </div>
            
            <div className="prose prose-lg text-primary space-y-6 max-w-none text-center">
              <div className="text-base sm:text-lg space-y-4">
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
              <div className="bg-secondary/30 p-8 sm:p-10 border-l-4 border-accent text-center space-y-4 shadow-sm rounded-none">
                <p className="font-bold text-accent text-sm sm:text-base uppercase tracking-widest leading-relaxed">
                  You set the direction;<br />I help you get there.
                </p>
              </div>
              <div className="text-base sm:text-lg space-y-4">
                <p>
                  This is your journey. I'm honored to ride with you. <br />
                  Whether you're stepping into your leadership presence, navigating a career pivot, or 
                  embracing your most unapologetically authentic self — I'm here to provide the momentum and the map.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/10 p-8 sm:p-12 lg:p-20 max-w-5xl mx-auto rounded-none">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-primary pb-2">Voices of Transformation</h2>
          </div>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-background/80 border-none shadow-sm rounded-none">
                <CardContent className="p-8 sm:p-10 space-y-6 flex flex-col items-center text-center">
                  <p className="text-lg sm:text-xl lg:text-2xl italic text-primary/80 leading-relaxed max-w-2xl">{t.text}</p>
                  <div className="pt-4 border-t border-primary/10 w-full max-w-xs">
                    <p className="font-bold text-primary text-lg pb-1">{t.name}</p>
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
