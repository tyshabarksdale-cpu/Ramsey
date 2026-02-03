
"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Gain Clarity",
    description: "Define what success looks like for you and create a roadmap to achieve it. Cut through the noise and focus on what truly matters.",
  },
  {
    title: "Recognize Your Strength",
    description: "Identify and overcome beliefs and patterns holding you back. See yourself clearly and acknowledge the resilience you already possess.",
  },
  {
    title: "Embrace Your Voice",
    description: "Discover and trust your authentic voice. Learn to communicate with confidence and clarity, knowing your perspective matters.",
  },
  {
    title: "Create Balance",
    description: "Design a life that honors your priorities across work, relationships, health, and purpose.",
  },
  {
    title: "Take Meaningful Action",
    description: "Transform insight into progress with accountability and support. Move from intention to implementation with confidence.",
  },
  {
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
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center py-12 lg:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 items-stretch max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
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
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-ombre-dark p-10 lg:p-16 flex flex-col justify-center text-primary-foreground rounded-r-3xl text-left"
          >
            <div className="space-y-6 max-w-md">
              <h1 className="text-4xl lg:text-5xl font-headline leading-[1.2] bg-gradient-to-r from-white via-white/80 to-white bg-clip-text text-transparent pb-1">
                You Steer, <br />
                <span className="text-accent italic">We Pedal.</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80 font-headline italic tracking-wide">
                Empowering you to step into your power.
              </p>
              <p className="text-base leading-relaxed text-primary-foreground/70">
                As an Empowerment Strategist, Sybil Ramsey helps women and professionals 
                navigate the complex terrains of life, career, and personal growth with 
                unwavering support and strategic advocacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white font-bold">
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
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-base mb-4 block">Our Mission</span>
          <h2 className="text-2xl lg:text-4xl font-headline leading-relaxed text-primary font-normal italic tracking-wide">
            "I create a safe, supportive space where individuals feel heard, empowered, and valued. 
            Through compassionate advocacy, I help others recognize their strength, embrace their voice, 
            and step into their power."
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/20"></div>
            <span className="font-headline text-xl text-primary">Sybil Ramsey</span>
            <div className="h-px w-12 bg-primary/20"></div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid Section */}
      <section className="pt-2 pb-32 bg-ombre-light">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl lg:text-6xl font-headline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pb-1">How We Transform Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-headline italic leading-relaxed tracking-wide">
              Our core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white/40 backdrop-blur-md">
                  <CardContent className="p-10 space-y-6 flex flex-col items-center">
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
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg text-white">
              <Link href="/connect">Schedule Your Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
