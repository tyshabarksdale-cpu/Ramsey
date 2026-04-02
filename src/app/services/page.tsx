
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

const services = [
  {
    id: "leadership",
    title: "Leadership Presence",
    description: "For leaders at every level who are ready to lead with authenticity and drive meaningful change from where they stand.",
    features: ["Strategic Leadership", "Organizational Advocacy", "Conflict Resolution", "Early Retirement Planning"],
    question: "WHAT EMBODIES LEADERSHIP?",
  },
  {
    id: "career",
    title: "Career Transition",
    description: "Navigate transitions, promotions, or mid-to-late career shifts with clarity and purpose.",
    features: ["Personal Branding", "Interview Advocacy", "Negotiation Skills", "Career Pivoting"],
    question: "HOW WOULD YOU LIKE TO PIVOT?",
  },
  {
    id: "life",
    title: "Life Enrichment",
    description: "Reclaim your personal power, find holistic balance, and live unapologetically authentic.",
    features: ["Personal Boundaries", "Voice Discovery", "Wellness Integration", "Purpose Finding"],
    question: "WHAT PART OF YOURSELF HAVE YOU BEEN WAITING TO MEET?",
  }
]

export default function Services() {
  const [isActivated, setIsActivated] = useState(false)
  const tandemImagePlaceholder = PlaceHolderImages.find(img => img.id === "tandem-bike")
  const tandemImage = tandemImagePlaceholder?.imageUrl || "https://firebasestorage.googleapis.com/v0/b/studio-5463986047-b4104.firebasestorage.app/o/Two%20ladies%20on%20a%20tandem%20bike.png?alt=media&token=81ca3b0d-0ab3-46fc-9abd-e21bc792942b"

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 flex flex-col items-center">
          <p className="text-accent font-bold tracking-[0.3em] uppercase text-sm">Crafted Strategies</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-headline text-primary">
            Every path <br /><span className="text-accent italic">uniquely</span> yours.
          </h1>
          <p className="text-xl sm:text-2xl text-primary font-headline italic leading-relaxed tracking-wide max-w-2xl opacity-80">
            We don't believe in one-size-fits-all coaching. Every partnership is crafted as uniquely as the path you steer.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent mb-12">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="rounded-none py-6 text-lg font-headline border border-primary/10 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none bg-secondary/20 rounded-none shadow-none">
                    <CardContent className="p-10 lg:p-16">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8 flex flex-col items-center text-center">
                          <h2 className="text-4xl sm:text-5xl font-headline text-primary pb-2 text-center">{service.title}</h2>
                          <p className="text-xl sm:text-2xl text-primary/80 leading-relaxed font-headline italic">
                            {service.description}
                          </p>
                          <div className="h-px w-24 bg-accent/30" />
                          <ul className="space-y-4 w-fit mx-auto text-left">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-4 text-lg font-medium text-primary">
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                          <Link 
                            href="https://calendly.com/ramsey-empowerment/15min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block w-full"
                          >
                            <div className="bg-white p-12 text-center border border-primary/5 hover:shadow-2xl transition-all duration-500 rounded-none relative overflow-hidden">
                              <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl sm:text-3xl font-headline text-primary pb-0 group-hover:text-accent transition-colors">
                                  {service.question}
                                </h3>
                                <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest text-xs pt-4">
                                  Book a Discovery Call <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Career Evolution Framework Section */}
        <section className="mb-24 py-16 bg-white/50 border-y border-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 space-y-4">
              <p className="text-xl sm:text-2xl text-primary/70 font-headline italic max-w-3xl mx-auto">
                Navigating the organizational landscape requires understanding where you are and the momentum needed to reach the next horizon.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-[800px] grid grid-cols-[100px_1fr_1fr_1fr] bg-background border border-white shadow-2xl">
                {/* Header Row */}
                <div className="bg-secondary/50 text-primary font-bold uppercase tracking-widest text-xs p-4 border-r border-b border-white flex items-center justify-center text-center leading-tight">Career<br/>Level</div>
                <div className="bg-secondary/50 text-primary font-bold uppercase tracking-widest text-xs p-4 border-r border-b border-white text-center">Management</div>
                <div className="bg-secondary/50 text-primary font-bold uppercase tracking-widest text-xs p-4 border-r border-b border-white text-center">Professionals</div>
                <div className="bg-secondary/50 text-primary font-bold uppercase tracking-widest text-xs p-4 border-b border-white text-center">Para-Professionals</div>

                {/* Level 6 */}
                <div className="bg-secondary/30 border-r border-b border-white p-4 flex items-center justify-center font-bold text-primary">L6</div>
                <div className="bg-primary text-white p-4 border-r border-b border-white text-center font-bold">Senior Director (M6)</div>
                <div className="bg-accent text-white p-4 border-r border-b border-white text-center font-bold">Pre-Eminent (P6)</div>
                <div className="bg-secondary/10 border-b border-white p-4"></div>

                {/* Level 5 */}
                <div className="bg-secondary/30 border-r border-b border-white p-4 flex items-center justify-center font-bold text-primary">L5</div>
                <div className="bg-primary/90 text-white p-4 border-r border-b border-white text-center font-medium">Director (M5)</div>
                <div className="bg-accent/90 text-white p-4 border-r border-b border-white text-center font-medium">Expert (P5)</div>
                <div className="bg-secondary/10 border-b border-white p-4"></div>

                {/* Level 4 */}
                <div className="bg-secondary/30 border-r border-b border-white p-4 flex items-center justify-center font-bold text-primary">L4</div>
                <div className="bg-primary/80 text-white p-4 border-r border-b border-white text-center">Senior Manager (M4)</div>
                <div className="bg-accent/80 text-white p-4 border-r border-b border-white text-center">Specialist (P4)</div>
                <div className="bg-secondary/10 border-b border-white p-4"></div>

                {/* Level 3 */}
                <div className="bg-secondary/30 border-r border-b border-white p-4 flex items-center justify-center font-bold text-primary">L3</div>
                <div className="bg-primary/70 text-white p-4 border-r border-b border-white text-center">Manager (M3)</div>
                <div className="bg-accent/70 text-white p-4 border-r border-b border-white text-center">Senior (P3)</div>
                <div className="bg-secondary/10 border-b border-white p-4"></div>

                {/* Level 2 */}
                <div className="bg-secondary/30 border-r border-b border-white p-4 flex items-center justify-center font-bold text-primary">L2</div>
                <div className="bg-primary/60 text-white p-4 border-r border-b border-white text-center text-sm leading-tight flex items-center justify-center">Team Leader - Professionals (M2)</div>
                <div className="bg-accent/60 text-white p-4 border-r border-b border-white text-center flex items-center justify-center">Experienced (P2)</div>
                <div className="bg-primary/40 text-primary p-4 border-b border-white text-center font-bold flex items-center justify-center">Specialist (S4)</div>

                {/* Level 1 - Start Row 1 */}
                <div className="bg-secondary/30 border-r border-white p-4 flex items-center justify-center font-bold text-primary row-span-3">L1</div>
                <div className="bg-primary text-white p-8 border-r border-white text-center font-bold leading-tight flex items-center justify-center row-span-3">Team Leader - Para-Professionals (M1)</div>
                <div className="bg-accent text-white p-8 border-r border-white text-center font-bold flex items-center justify-center row-span-3">Entry (P1)</div>
                <div className="bg-primary/30 text-primary p-4 border-b border-white text-center font-bold flex items-center justify-center">Senior (S3)</div>

                {/* Level 1 - Start Row 2 (S2) */}
                <div className="bg-primary/20 text-primary p-4 border-b border-white text-center font-bold flex items-center justify-center col-start-4">Experienced (S2)</div>

                {/* Level 1 - Start Row 3 (S1) */}
                <div className="bg-primary/10 text-primary p-4 text-center font-bold flex items-center justify-center col-start-4">Entry (S1)</div>
              </div>
            </div>
            
            <div className="mt-8 flex items-start gap-4 p-6 bg-secondary/20 border border-primary/5 italic text-sm text-primary/80">
              <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p>This framework serves as a guide for our work together. Whether you are aiming for a Senior Director role or transitioning from an entry-level professional to a specialist path, we provide the strategy to help you navigate each milestone.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ filter: 'grayscale(100%)' }}
              animate={{ filter: isActivated ? 'grayscale(0%)' : 'grayscale(100%)' }}
              onMouseEnter={() => setIsActivated(true)}
              onClick={() => setIsActivated(true)}
              onTouchStart={() => setIsActivated(true)}
              onViewportEnter={() => setIsActivated(true)}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[3/4] max-w-md mx-auto w-full overflow-hidden shadow-2xl rounded-none cursor-pointer"
            >
              <Image
                src={tandemImage}
                alt="Two ladies on a tandem bike"
                fill
                className="object-cover"
                data-ai-hint="women tandem bike"
                priority
              />
            </motion.div>
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-primary pb-4">A Partnership Built on Trust</h2>
              <div className="space-y-6 text-xl sm:text-2xl text-primary/80 italic font-headline leading-relaxed">
                <p>
                  In our sessions, you aren't just a client; you are the driver. 
                  I am here to provide the momentum and the map.
                </p>
                <p>
                  My unique approach focuses on deep listening, holding space for your authentic self, 
                  and asking the questions that help you advocate for yourself in any room.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-none px-12 h-16 text-xl font-bold bg-accent hover:bg-accent/90 shadow-xl text-white font-headline">
                <Link href="/connect">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-primary text-primary-foreground p-12 lg:p-20 shadow-2xl relative overflow-hidden max-w-7xl mx-auto rounded-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full"></div>
          <div className="relative z-10 text-center space-y-12">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-headline text-white pb-4 text-center">The Empowerment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "1", title: "Discovery Call", text: "A 30-minute deep dive to understand your current landscape and see if our tandem is a match." },
                { step: "2", title: "Strategic Roadmap", text: "We map out your destinations and define the metrics of success for our journey together." },
                { step: "3", title: "The Pedal Sessions", text: "Regular sessions focused on action, accountability, and advocacy to move you forward." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 border-2 border-accent flex items-center justify-center font-headline font-bold text-2xl text-accent rounded-full">{item.step}</div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-white pb-0">{item.title}</h4>
                    <p className="text-lg text-primary-foreground/80 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
