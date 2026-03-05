"use client"

import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Executive Empowerment",
    description: "For high-level leaders seeking to lead with authenticity and advocate for organizational change.",
    features: ["Strategic Leadership", "Organizational Advocacy", "Conflict Resolution", "Phased Retirement Planning"],
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
  const sybilImage = PlaceHolderImages.find(img => img.id === "connect-sybil")

  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest mb-4">
            Our Offerings
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline text-primary pb-1">Tailored Strategies</h1>
          <p className="text-2xl text-primary font-headline italic leading-relaxed tracking-wide opacity-80">
            We don't believe in one-size-fits-all coaching. Every partnership is as unique as the path you steer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <Card key={i} className="relative overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white text-center">
              <CardHeader className="p-10 space-y-5">
                <div>
                  <CardTitle className="text-3xl font-headline mb-4 text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-primary/70">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-10">
                <ul className="space-y-5 inline-block text-left w-full">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-4 text-base font-medium text-primary/80">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-10 border-t border-secondary">
                  <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">Investment</p>
                  <p className="text-3xl font-bold text-primary font-headline">{service.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl grayscale">
              {sybilImage && (
                <Image
                  src={sybilImage.imageUrl}
                  alt="Sybil Elise"
                  fill
                  className="object-cover"
                  data-ai-hint="empowerment coach portrait"
                />
              )}
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-headline text-primary leading-tight">A Partnership Built on Trust</h2>
              <div className="space-y-6 text-xl text-primary/80 italic font-headline leading-relaxed">
                <p>
                  "In our sessions, you aren't just a client; you are the driver. 
                  I am here to provide the momentum and the map."
                </p>
                <p>
                  My unique approach focuses on deep listening, holding space for your authentic self, 
                  and asking the questions that help you advocate for yourself in any room.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-ombre-dark text-primary-foreground rounded-[3rem] p-10 lg:p-20 shadow-2xl relative overflow-hidden max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-12">
              <div className="space-y-4">
                <Badge variant="outline" className="border-accent/30 text-accent px-4 py-1">The Methodology</Badge>
                <h2 className="text-4xl lg:text-6xl font-headline text-white pb-1">The Empowerment Process</h2>
              </div>
              <div className="space-y-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center font-headline font-bold text-2xl text-accent">1</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-white">Discovery Call</h4>
                    <p className="text-primary-foreground/80 leading-relaxed text-lg">A 15-minute deep dive to understand your current landscape and see if our tandem is a match.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center font-headline font-bold text-2xl text-accent">2</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-white">Strategic Roadmap</h4>
                    <p className="text-primary-foreground/80 leading-relaxed text-lg">We map out your destinations and define the metrics of success for our journey together.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center font-headline font-bold text-2xl text-accent">3</div>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 text-white">The Pedal Sessions</h4>
                    <p className="text-primary-foreground/80 leading-relaxed text-lg">Regular sessions focused on action, accountability, and advocacy to move you forward.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Clarity" },
                { label: "Results" },
                { label: "Action" },
                { label: "Empowerment" }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 text-primary-foreground p-10 text-center flex flex-col items-center justify-center gap-6 group hover:bg-white/10 transition-all aspect-square">
                  <p className="font-bold tracking-[0.3em] uppercase text-sm text-accent">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center space-y-10 flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl font-headline text-primary pb-1">Ready to start pedaling?</h2>
          <Button asChild size="lg" className="rounded-full px-16 h-20 text-2xl font-bold bg-accent hover:bg-accent/90 shadow-xl text-white font-headline tracking-wide">
            <Link href="/connect">Book Your Strategy Session</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}