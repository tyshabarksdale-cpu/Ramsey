
"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Compass, ShieldCheck, Megaphone, Scale, ArrowRightCircle, Heart } from "lucide-react"

const benefits = [
  {
    icon: Compass,
    title: "Gain Clarity",
    description: "Define what success looks like for you and create a roadmap to achieve it. Cut through the noise and focus on what truly matters.",
  },
  {
    icon: ShieldCheck,
    title: "Recognize Your Strength",
    description: "Identify and overcome beliefs and patterns holding you back. See yourself clearly and acknowledge the resilience you already possess.",
  },
  {
    icon: Megaphone,
    title: "Embrace Your Voice",
    description: "Discover and trust your authentic voice. Learn to communicate with confidence and clarity, knowing your perspective matters.",
  },
  {
    icon: Scale,
    title: "Create Balance",
    description: "Design a life that honors your priorities across work, relationships, health, and purpose.",
  },
  {
    icon: ArrowRightCircle,
    title: "Take Meaningful Action",
    description: "Transform insight into progress with accountability and support. Move from intention to implementation with confidence.",
  },
  {
    icon: Heart,
    title: "Foster Connection",
    description: "Build meaningful relationships and create positive change that ripples beyond yourself.",
  },
]

export default function Home() {
  const [isHeroActivated, setIsHeroActivated] = useState(false)
  const heroImage = PlaceHolderImages.find(img => img.id === "sybil-hero")

  return (
    <div className="flex flex-col">
      <section className="relative py-6 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-5xl text-center">
          <motion.div 
            initial={{ filter: 'grayscale(100%)' }}
            animate={{ filter: isHeroActivated ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onMouseEnter={() => setIsHeroActivated(true)}
            onClick={() => setIsHeroActivated(true)}
            onTouchStart={() => setIsHeroActivated(true)}
            onViewportEnter={() => setIsHeroActivated(true)}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl mb-8 rounded-none cursor-pointer"
          >
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint="professional portrait"
                priority
              />
            )}
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-primary pb-4">
              You Steer <span className="text-accent italic">As We Pedal</span>
            </h1>

            <div className="relative max-w-2xl mx-auto py-4">
              <div className="relative bg-primary/95 backdrop-blur-sm p-8 sm:p-12 shadow-2xl text-center rounded-none">
                <p className="text-lg sm:text-xl leading-relaxed text-primary-foreground font-medium">
                  Think of our work together like riding a tandem bike. You're in the front seat — steering, deciding the direction, owning the destination. 
                  I'm right behind you, pedaling alongside you, helping power the journey.
                </p>
              </div>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-headline tracking-wide leading-relaxed max-w-3xl mx-auto">
              Empowering women and professionals to recognize their strength and step into their power.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-none border-primary text-primary font-headline text-xl px-10 py-7">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto rounded-none bg-accent text-white font-headline text-xl px-10 py-7 shadow-lg">
                <Link href="/connect">Start Your Journey</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="border-none shadow-2xl bg-white/90 rounded-none overflow-hidden">
            <CardContent className="p-10 sm:p-16 text-center space-y-8">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xl sm:text-2xl block">Our Mission</span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-headline leading-relaxed text-primary font-normal italic tracking-wide pb-4">
                I create a safe, supportive space where individuals feel heard, empowered, and valued. 
                Through compassionate advocacy, I help others recognize their strength, embrace their voice, 
                and step into their power—fostering a cycle of empowerment, connection, and positive change.
              </h2>
              <div className="flex items-center justify-center gap-6 pt-4">
                <div className="h-px w-16 sm:w-24 bg-primary/20"></div>
                <span className="font-headline text-2xl sm:text-3xl text-primary">Sybil Elise Ramsey</span>
                <div className="h-px w-16 sm:w-24 bg-primary/20"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-ombre-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-primary pb-6">The Cycle of Empowerment</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-headline italic leading-relaxed tracking-wide">
              Our core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-center max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-sm bg-white/80 h-full rounded-none">
                <CardContent className="p-8 sm:p-10 space-y-4 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary mb-2 rounded-full grayscale hover:grayscale-0 transition-all cursor-pointer">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-headline text-primary pb-4">{benefit.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
