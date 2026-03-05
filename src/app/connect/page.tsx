
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

export default function Connect() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const connectImage = PlaceHolderImages.find(img => img.id === "connect-sybil")

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
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-10 flex flex-col items-center">
          {connectImage && (
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white grayscale transition-all duration-700 hover:grayscale-0">
              <Image
                src={connectImage.imageUrl}
                alt="Sybil Elise portrait"
                fill
                className="object-cover"
                data-ai-hint="professional black and white portrait"
              />
            </div>
          )}
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-primary">Start Your Journey</h1>
          <p className="text-2xl text-primary font-headline italic leading-relaxed tracking-wide max-w-3xl">
            Whether you're ready to start your journey or just have a few questions, 
            I'm here to listen and guide. You steer, we pedal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-10">
              <h2 className="text-3xl font-headline font-bold text-primary">Direct Access</h2>
              <div className="space-y-10">
                <div className="group">
                  <p className="text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">Email</p>
                  <a href="mailto:Ramsey.empowerment@gmail.com" className="text-2xl font-bold text-primary hover:text-accent transition-colors">Ramsey.empowerment@gmail.com</a>
                </div>
                <div className="group">
                  <p className="text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">LinkedIn</p>
                  <a href="https://www.linkedin.com/company/ramsey-empowerment/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-primary hover:text-accent transition-colors">Sybil Elise, Empowerment Strategist</a>
                </div>
                <div className="group">
                  <p className="text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">Instagram</p>
                  <a href="https://www.instagram.com/CoachSybil" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-primary hover:text-accent transition-colors">@CoachSybil</a>
                </div>
                <div>
                  <p className="text-xs text-accent uppercase font-bold tracking-[0.2em] mb-2">Location</p>
                  <p className="text-2xl font-bold text-primary">Louisville (Kentuckiana) Metro Area & Global Remote</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground p-10 lg:p-14 rounded-[3rem] overflow-hidden relative border-none shadow-2xl">
              <div className="relative z-10 space-y-8">
                <h3 className="text-4xl font-headline font-bold text-white">Book Instantly</h3>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  Ready to see if we're a fit? Schedule a complimentary 15-minute 
                  Discovery Call directly through my calendar.
                </p>
                <Button size="lg" className="w-full rounded-full py-10 text-2xl font-bold bg-accent hover:bg-accent/90 border-none font-headline shadow-lg" asChild>
                  <a href="https://calendly.com/ramsey-empowerment/15min" target="_blank" rel="noopener noreferrer">
                    Open Calendly
                  </a>
                </Button>
                <p className="text-sm text-center text-primary-foreground/60 italic">
                  *Link will open in a new window
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-accent/20 rounded-full blur-3xl"></div>
            </Card>
          </div>

          <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-secondary">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-3xl font-headline font-bold mb-10 text-center text-primary">Send a Message</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-bold">Full Name*</Label>
                      <Input id="name" required placeholder="Jane Doe" className="h-14 rounded-xl border-primary/20 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-bold">Email Address*</Label>
                      <Input id="email" type="email" required placeholder="jane@example.com" className="h-14 rounded-xl border-primary/20 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary font-bold">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="h-14 rounded-xl border-primary/20 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="source" className="text-primary font-bold">How did you hear about us?</Label>
                    <Select>
                      <SelectTrigger className="h-14 rounded-xl border-primary/20 text-primary">
                        <SelectValue placeholder="Please select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-bold">How can I help you?*</Label>
                    <Textarea id="message" required placeholder="Tell me a bit about your journey..." className="min-h-[180px] rounded-xl border-primary/20 text-primary" />
                  </div>
                </div>
                <Button type="submit" className="w-full rounded-full py-8 text-xl font-bold bg-primary text-white hover:bg-primary/90 font-headline shadow-md">
                  Send Message
                </Button>
                <p className="text-sm text-primary/60 text-center">
                  *Required fields. We respect your privacy and will never share your info.
                </p>
              </form>
            ) : (
              <div className="text-center py-24 space-y-8">
                <div className="w-20 h-20 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-4xl font-headline font-bold text-primary">Thank You!</h3>
                <p className="text-xl text-primary/80 leading-relaxed">
                  Your message has been received. Sybil will review your inquiry and 
                  respond within the next 24-48 business hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full border-primary text-primary hover:bg-primary/10 font-headline h-14 px-10 text-lg">
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
