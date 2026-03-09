
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
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
}

const fadeInLeft = {
  initial: { x: -60, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "sybil-hero")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-6 lg:py-10 overflow-hidden bg-white">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-5xl text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl scale-x-[-1] mb-6 grayscale"
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
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-primary whitespace-nowrap pb-4">
              You Steer <span className="text-accent italic">As We Pedal</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-headline tracking-wide leading-relaxed max-w-3xl mx-auto">
              Empowering women and professionals to recognize their strength and step into their power.
            </p>

            {/* Redesigned Tandem Section with Scroll Fade-In */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl mx-auto py-4"
            >
              <div className="relative bg-secondary/30 backdrop-blur-sm border-l-4 border-accent p-8 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm text-left">
                <p className="text-lg sm:text-xl leading-relaxed text-primary/90 font-medium">
                  Coaching is like riding a tandem bike — you're always in the front seat, steering toward your own destination. 
                  I'm in the back, pedaling alongside you, helping power the journey.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent/90 text-white font-bold font-headline text-xl tracking-wide px-10 py-7 shadow-lg">
                <Link href="/connect">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-primary text-primary hover:bg-primary/5 bg-transparent font-headline text-xl tracking-wide px-10 py-7">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section 
        {...fadeInLeft}
        className="py-12 lg:py-16 bg-secondary/20"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md rounded-[2.5rem] overflow-hidden">
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
      </motion.section>

      {/* Benefits Grid Section */}
      <section className="py-10 lg:py-16 bg-ombre-light">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-8 sm:mb-12 space-y-2"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-6">The Cycle of Empowerment</h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-headline italic leading-relaxed tracking-wide">
              Our core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-md h-full rounded-[2rem]">
                  <CardContent className="p-8 sm:p-10 space-y-4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <benefit.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-headline text-primary pb-4">{benefit.title}</h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            className="mt-10 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-12 h-16 sm:h-18 text-xl font-bold bg-primary hover:bg-primary/90 shadow-xl text-white font-headline tracking-wide w-full sm:w-auto">
              <Link href="/connect">Schedule Your Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
