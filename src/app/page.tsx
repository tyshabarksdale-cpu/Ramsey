
"use client"

import Image from "next/image"
import Link from "next/link"
import { Compass, ShieldCheck, Megaphone, Waves, ArrowRightCircle, HeartHandshake } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Gain Clarity",
    description: "Define what success looks like for you and create a roadmap to achieve it. Cut through the noise and focus on what truly matters.",
    icon: Compass,
  },
  {
    title: "Recognize Your Strength",
    description: "Identify and overcome beliefs and patterns holding you back. See yourself clearly and acknowledge the resilience you already possess.",
    icon: ShieldCheck,
  },
  {
    title: "Embrace Your Voice",
    description: "Discover and trust your authentic voice. Learn to communicate with confidence and clarity, knowing your perspective matters.",
    icon: Megaphone,
  },
  {
    title: "Create Balance",
    description: "Design a life that honors your priorities across work, relationships, health, and purpose.",
    icon: Waves,
  },
  {
    title: "Take Meaningful Action",
    description: "Transform insight into progress with accountability and support. Move from intention to implementation with confidence.",
    icon: ArrowRightCircle,
  },
  {
    title: "Foster Connection",
    description: "Build meaningful relationships and create positive change that ripples beyond yourself.",
    icon: HeartHandshake,
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
      <section className="relative overflow-hidden pt-12 lg:pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-headline font-bold leading-[1.1]">
                  You Steer, <br />
                  <span className="text-primary italic">We Pedal.</span>
                </h1>
                <p className="text-2xl text-muted-foreground font-headline italic tracking-wide">
                  Empowering you to step into your power.
                </p>
              </div>
              <p className="text-xl leading-relaxed text-muted-foreground max-w-xl">
                As an Empowerment Strategist, Sybil Ramsey helps women and professionals 
                navigate the complex terrains of life, career, and personal growth with 
                unwavering support and strategic advocacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-xl font-bold shadow-xl hover:scale-105 transition-transform">
                  <Link href="/connect">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-xl font-bold border-2 hover:bg-primary/5">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full max-w-lg mx-auto grayscale hover:grayscale-0 transition-all duration-1000 rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
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
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section 
        {...fadeInUp}
        className="py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl lg:text-6xl font-headline mb-16 italic leading-snug">
            "I create a safe, supportive space where individuals feel heard, empowered, and valued. 
            Through compassionate advocacy, I help others recognize their strength, embrace their voice, 
            and step into their power."
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto"></div>
        </div>
      </motion.section>

      {/* Benefits Grid Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-24 space-y-6"
          >
            <h2 className="text-5xl lg:text-7xl font-headline font-bold">How We Transform Together</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our six core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-2 duration-500 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-10 space-y-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                      <benefit.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-headline font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            {...fadeInUp}
            className="mt-24 text-center"
          >
            <Button asChild size="lg" className="rounded-full px-16 h-20 text-2xl font-bold bg-accent hover:bg-accent/90 shadow-xl">
              <Link href="/connect">Schedule Your Discovery Call</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
