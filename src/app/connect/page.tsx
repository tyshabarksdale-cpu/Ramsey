
"use client"

import { useState } from "react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function Connect() {
  const [isActive, setIsActive] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const tandemImage = PlaceHolderImages.find(img => img.id === "tandem-bike")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    toast({
      title: "Message Sent",
      description: "Sybil will get back to you within 24-48 hours.",
    })
  }

  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-8 sm:space-y-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)' 
            }}
            onMouseEnter={() => setIsActive(true)}
            onClick={() => setIsActive(true)}
            onTouchStart={() => setIsActive(true)}
            transition={{ duration: 0.8 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 overflow-hidden shadow-2xl border-4 border-white cursor-pointer rounded-none bg-muted"
          >
            {tandemImage && (
              <Image
                src={tandemImage.imageUrl}
                alt="Women on tandem bike"
                fill
                className="object-cover"
                data-ai-hint="women tandem bike"
                priority
              />
            )}
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-headline font-bold text-primary">Start Your Journey</h1>
          <p className="text-xl sm:text-2xl text-primary font-headline italic leading-relaxed tracking-wide max-w-3xl mx-auto">
            Whether you're ready to start your journey or just have a few questions, 
            I'm here to listen and guide. You steer as we pedal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          <div className="space-y-8 sm:space-y-12 text-center">
            <div className="space-y-8 sm:space-y-10">
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-primary">Direct Access</h2>
              <div className="space-y-8 sm:space-y-10">
                <div className="group">
                  <p className="text-[10px] sm:text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">Email</p>
                  <a href="mailto:Ramsey.empowerment@gmail.com" className="text-xl sm:text-2xl font-bold text-primary hover:text-accent transition-colors break-words">Ramsey.empowerment@gmail.com</a>
                </div>
                <div className="group">
                  <p className="text-[10px] sm:text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">LinkedIn</p>
                  <a href="https://www.linkedin.com/company/ramsey-empowerment/" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-bold text-primary hover:text-accent transition-colors">Sybil Elise, Empowerment Strategist</a>
                </div>
                <div className="group">
                  <p className="text-[10px] sm:text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">Instagram</p>
                  <a href="https://www.instagram.com/CoachSybil" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-bold text-primary hover:text-accent transition-colors">@CoachSybil</a>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">Location</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">Louisville (Kentuckiana) Metro Area & Global Remote</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground p-8 sm:p-10 lg:p-14 overflow-hidden relative border-none shadow-2xl mx-auto rounded-none">
              <div className="relative z-10 space-y-6 sm:space-y-8">
                <h3 className="text-3xl sm:text-4xl font-headline font-bold text-white">Book Instantly</h3>
                <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
                  Ready to see if we're a fit? Schedule a complimentary 30-minute 
                  Discovery Call directly through my calendar.
                </p>
                <Button size="lg" className="w-full rounded-none py-8 sm:py-10 text-xl sm:text-2xl font-bold bg-accent hover:bg-accent/90 border-none font-headline shadow-lg" asChild>
                  <a href="https://calendly.com/ramsey-empowerment/15min" target="_blank" rel="noopener noreferrer">
                    Open Calendly
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <div className="bg-white p-6 sm:p-10 lg:p-16 shadow-2xl border border-secondary rounded-none">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-headline font-bold mb-6 sm:mb-10 text-center text-primary">Send a Message</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-bold">Full Name*</Label>
                      <Input id="name" required placeholder="Jane Doe" className="h-12 sm:h-14 rounded-none border-primary/20 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-bold">Email Address*</Label>
                      <Input id="email" type="email" required placeholder="jane@example.com" className="h-12 sm:h-14 rounded-none border-primary/20 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-bold">How can I help you?*</Label>
                    <Textarea id="message" required placeholder="Tell me a bit about your journey..." className="min-h-[150px] sm:min-h-[180px] rounded-none border-primary/20 text-primary" />
                  </div>
                </div>
                <Button type="submit" className="w-full rounded-none py-6 sm:py-8 text-lg sm:text-xl font-bold bg-primary text-white hover:bg-primary/90 font-headline shadow-md">
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-16 sm:py-24 space-y-6 sm:space-y-8">
                <h3 className="text-3xl sm:text-4xl font-headline font-bold text-primary">Thank You!</h3>
                <p className="text-lg sm:text-xl text-primary/80 leading-relaxed">
                  Your message has been received. Sybil will review your inquiry and 
                  respond within the next 24-48 business hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="w-full sm:w-auto rounded-none border-primary text-primary hover:bg-primary/10 font-headline h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg">
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
