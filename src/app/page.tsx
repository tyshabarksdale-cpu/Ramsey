
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
      <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center py-6 lg:py-10 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-stretch max-w-4xl">
          <div 
            className="relative aspect-[4/5] lg:aspect-auto rounded-l-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
          >
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ombre-dark p-8 lg:p-12 flex flex-col justify-center text-primary-foreground rounded-r-3xl text-left"
          >
            <div className="space-y-4 max-w-sm">
              <h1 className="text-3xl lg:text-4xl font-headline leading-[1.2] bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent pb-1">
                You Steer, <br />
                <span className="text-accent italic">We Pedal.</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 font-headline tracking-wide">
                Empowering you to step into your power.
              </p>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                As an Empowerment Strategist, Sybil Ramsey helps women and professionals 
                navigate the complex terrains of life, career, and personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="outline" size="sm" className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent font-headline text-base tracking-wide px-6 py-5">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-accent hover:bg-accent/90 text-white font-bold font-headline text-base tracking-wide px-6 py-5">
                  <Link href="/connect">Start Your Journey</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section 
        {...fadeInUp}
        className="py-12 bg-background"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Mission</span>
          <h2 className="text-xl lg:text-3xl font-headline leading-relaxed text-primary font-normal italic tracking-wide">
            "I create a safe, supportive space where individuals feel heard, empowered, and valued. 
            Through compassionate advocacy, I help others recognize their strength, embrace their voice, 
            and step into their power."
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-primary/20"></div>
            <span className="font-headline text-lg text-primary">Sybil Ramsey</span>
            <div className="h-px w-10 bg-primary/20"></div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid Section */}
      <section className="pt-2 pb-24 bg-ombre-light">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-12 space-y-4"
          >
            <h2 className="text-3xl lg:text-5xl font-headline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-1">How We Transform Together</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-headline italic leading-relaxed tracking-wide">
              Our core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white/40 backdrop-blur-md h-full">
                  <CardContent className="p-8 space-y-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-headline text-primary">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-base font-bold bg-primary hover:bg-primary/90 shadow-lg text-white font-headline tracking-wide">
              <Link href="/connect">Schedule Your Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
