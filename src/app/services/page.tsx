
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sparkles, TrendingUp, Zap, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const services = [
  {
    title: "Executive Empowerment",
    description: "For high-level leaders seeking to lead with authenticity and advocate for organizational change.",
    features: ["Strategic Leadership", "Organizational Advocacy", "Phased Retirement Planning", "Presence Building"],
    price: "Custom Packages Available"
  },
  {
    title: "Career Strategy",
    description: "Navigate transitions, promotions, or mid-to-late career shifts with clarity and purpose.",
    features: ["Personal Branding", "Interview Advocacy", "Negotiation Skills", "Career Pivoting"],
    price: "Starting at $250 / Session"
  },
  {
    title: "Life Empowerment",
    description: "Reclaim your personal power, find holistic balance, and live unapologetically authentic.",
    features: ["Personal Boundaries", "Voice Discovery", "Wellness Integration", "Purpose Finding"],
    price: "Flexible Tiered Pricing"
  }
]

export default function Services() {
  const [isActivated, setIsActivated] = useState(false)
  const tandemImagePlaceholder = PlaceHolderImages.find(img => img.id === "tandem-bike")
  const tandemImage = tandemImagePlaceholder?.imageUrl || "https://firebasestorage.googleapis.com/v0/b/studio-5463986047-b4104.firebasestorage.app/o/Two%20ladies%20on%20a%20tandem%20bike.png?alt=media&token=81ca3b0d-0ab3-46fc-9abd-e21bc792942b"

  return (
    <div className="py-6 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 space-y-2 flex flex-col items-center">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-headline text-primary pb-6">Tailored Strategies</h1>
          <p className="text-2xl sm:text-3xl text-primary font-headline italic leading-relaxed tracking-wide opacity-80">
            We don't believe in one-size-fits-all coaching. Every partnership is as unique as the path you steer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <Card 
              key={i} 
              className={cn(
                "relative overflow-hidden border-none shadow-lg bg-white rounded-none",
                i === 2 ? "md:col-span-2 md:max-w-lg md:mx-auto w-full" : ""
              )}
            >
              <CardHeader className="p-8 sm:p-10 space-y-4 pb-4 text-center">
                <div>
                  <CardTitle className="text-3xl sm:text-4xl font-headline mb-2 text-primary pb-6">{service.title}</CardTitle>
                  <CardDescription className="text-lg sm:text-xl leading-relaxed text-primary/70">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8 sm:p-10 pt-0 space-y-6">
                <div className="flex justify-center">
                  <ul className="space-y-3 sm:space-y-4 flex flex-col items-start w-full max-fit">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-4 text-base sm:text-lg font-medium text-primary/80">
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 sm:pt-8 border-t border-secondary text-center">
                  <p className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1">Investment</p>
                  <p className="text-3xl sm:text-4xl font-bold text-primary font-headline pb-1">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ filter: 'grayscale(100%)' }}
              animate={{ filter: isActivated ? 'grayscale(0%)' : 'grayscale(100%)' }}
              onMouseEnter={() => setIsActivated(true)}
              onClick={() => setIsActivated(true)}
              onTouchStart={() => setIsActivated(true)}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[3/4] max-w-md mx-auto w-full overflow-hidden shadow-2xl rounded-none cursor-pointer"
            >
              <Image
                src={tandemImage}
                alt="Two ladies on a tandem bike"
                fill
                className="object-contain"
                data-ai-hint="women tandem bike"
                priority
              />
            </motion.div>
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-primary pb-6">A Partnership Built on Trust</h2>
              <div className="space-y-4 text-xl sm:text-2xl text-primary/80 italic font-headline leading-relaxed">
                <p>
                  In our sessions, you aren't just a client; you are the driver. 
                  I am here to provide the momentum and the map.
                </p>
                <p>
                  My unique approach focuses on deep listening, holding space for your authentic self, 
                  and asking the questions that help you advocate for yourself in any room.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-ombre-dark text-primary-foreground p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden max-w-7xl mx-auto rounded-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-white pb-6">The Empowerment Process</h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { step: "1", title: "Discovery Call", text: "A 30-minute deep dive to understand your current landscape and see if our tandem is a match." },
                  { step: "2", title: "Strategic Roadmap", text: "We map out your destinations and define the metrics of success for our journey together." },
                  { step: "3", title: "The Pedal Sessions", text: "Regular sessions focused on action, accountability, and advocacy to move you forward." }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 border border-accent/40 flex items-center justify-center font-headline font-bold text-xl text-accent mx-auto">{item.step}</div>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-bold mb-1 text-white pb-6">{item.title}</h4>
                      <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Clarity", icon: Sparkles },
                { label: "Results", icon: TrendingUp },
                { label: "Action", icon: Zap },
                { label: "Empowerment", icon: ShieldCheck }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 text-primary-foreground p-6 text-center flex flex-col items-center justify-center aspect-square rounded-none">
                  <item.icon className="w-8 h-8 text-accent mb-4" />
                  <p className="font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs text-accent">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-6 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-primary pb-6">Ready to start pedaling?</h2>
          <Button asChild size="lg" className="w-full sm:w-auto rounded-none px-24 h-24 text-2xl font-bold bg-accent hover:bg-accent/90 shadow-xl text-white font-headline tracking-wide">
            <a href="https://calendly.com/ramsey-empowerment/15min" target="_blank" rel="noopener noreferrer">
              Book Your Strategy Session
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
