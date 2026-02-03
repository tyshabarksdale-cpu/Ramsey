
import Image from "next/image"
import Link from "next/link"
import { Compass, ShieldCheck, Megaphone, Waves, ArrowRightCircle, HeartHandshake } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "sybil-hero")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight">
                  You Steer, <br />
                  <span className="text-primary">We Pedal.</span>
                </h1>
                <p className="text-2xl text-muted-foreground font-headline italic">
                  Empowering you to step into your power.
                </p>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
                As an Empowerment Strategist, Sybil Ramsey helps women and professionals 
                navigate the complex terrains of life, career, and personal growth with 
                unwavering support and strategic advocacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 text-lg font-bold">
                  <Link href="/connect">Start Your Journey</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg font-bold">
                  <Link href="/services">Learn More About Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-1000">
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
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-primary text-primary-foreground mt-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-headline mb-12 italic leading-relaxed">
            "I create a safe, supportive space where individuals feel heard, empowered, and valued. 
            Through compassionate advocacy, I help others recognize their strength, embrace their voice, 
            and step into their power—fostering a cycle of empowerment, connection, and positive change."
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">How We Transform Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our six core benefits are designed to support your journey from where you are to who you are meant to be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-bold bg-accent hover:bg-accent/90">
              <Link href="/connect">Schedule Your Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
