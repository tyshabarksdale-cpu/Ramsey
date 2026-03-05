"use client"

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

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "sybil-hero")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center py-10 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 items-stretch max-w-5xl">
          <div 
            className="relative aspect-[4/5] lg:aspect-auto rounded-l-3xl overflow-hidden shadow-2xl grayscale"
          >
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint="black and white professional woman portrait"
                priority
              />
            )}
          </div>
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ombre-dark p-8 lg:p-14 flex flex-col justify-center text-primary-foreground rounded-r-3xl text-left"
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-headline leading-[1.2] text-white">
                You Steer <br />
                <span className="text-accent italic">As We Pedal</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 font-headline tracking-wide leading-relaxed">
                Empowering women and professionals to recognize their strength and step into their power.
              </p>
              <div className="space-y-4 text-base leading-relaxed text-primary-foreground/80">
                <p>
                  Coaching is like riding a tandem bike — you're always in the front seat, steering toward your own destination. 
                  I'm in the back, pedaling alongside you, helping power the journey.
                </p>
                <p className="font-bold text-accent">You set the direction; I help you get there.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white font-bold font-headline text-lg tracking-wide px-8 py-6">
                  <Link href="/connect">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent font-headline text-lg tracking-wide px-8 py-6">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section 
        {...fadeInUp}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Our Mission</span>
          <h2 className="text-2xl lg:text-4xl font-headline leading-relaxed text-primary font-normal italic tracking-wide">
            "I create a safe, supportive space where individuals feel heard, empowered, and valued. 
            Through compassionate advocacy, I help others recognize their strength, embrace their voice, 
            and step into their power—fostering a cycle of empowerment, connection, and positive change."
          </h2>
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-primary/20"></div>
            <span className="font-headline text-2xl text-primary">Sybil Elise</span>
            <div className="h-px w-16 bg-primary/20"></div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid Section */}
      <section className="py-24 bg-ombre-light">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl lg:text-6xl font-headline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-1">The Cycle of Empowerment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-headline italic leading-relaxed tracking-wide">
              Our core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white/60 backdrop-blur-md h-full">
                  <CardContent className="p-10 space-y-5 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-headline text-primary">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            className="mt-20 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg text-white font-headline tracking-wide">
              <Link href="/connect">Schedule Your Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
