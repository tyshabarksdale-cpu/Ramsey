"use client"

import { useState } from "react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setIsSubmitted(true)
    toast({
      title: "Message Sent",
      description: "Sybil will get back to you within 24-48 hours.",
    })
  }

  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
          <h1 className="text-5xl lg:text-7xl font-headline font-bold text-primary pb-1">Connect</h1>
          <p className="text-xl text-primary font-headline italic leading-relaxed tracking-wide">
            Whether you're ready to start your journey or just have a few questions, 
            I'm here to listen and guide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Calendly */}
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-8">
              <h2 className="text-3xl font-headline font-bold text-primary">Direct Access</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-primary uppercase font-bold tracking-[0.2em] mb-2">Email</p>
                  <p className="text-xl font-bold text-primary">sybil@ramseyempowerment.com</p>
                </div>
                <div>
                  <p className="text-xs text-primary uppercase font-bold tracking-[0.2em] mb-2">LinkedIn</p>
                  <p className="text-xl font-bold text-primary">Sybil Ramsey, Empowerment Strategist</p>
                </div>
                <div>
                  <p className="text-xs text-primary uppercase font-bold tracking-[0.2em] mb-2">Location</p>
                  <p className="text-xl font-bold text-primary">Philadelphia Metro Area & Global Remote</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-3xl overflow-hidden relative border-none shadow-xl">
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-headline font-bold text-white">Book Instantly</h3>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Ready to see if we're a fit? Schedule a complimentary 30-minute 
                  Discovery Call directly through my calendar.
                </p>
                <Button size="lg" className="w-full rounded-full py-8 text-xl font-bold bg-accent hover:bg-accent/90 border-none" asChild>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Open Calendly
                  </a>
                </Button>
                <p className="text-xs text-center text-primary-foreground/60 italic">
                  *Link will open in a new window
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-secondary">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-3xl font-headline font-bold mb-8 text-center text-primary">Send a Message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary">Full Name*</Label>
                      <Input id="name" required placeholder="Jane Doe" className="rounded-xl border-primary/20 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary">Email Address*</Label>
                      <Input id="email" type="email" required placeholder="jane@example.com" className="rounded-xl border-primary/20 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-primary">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 000-0000" className="rounded-xl border-primary/20 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="source" className="text-primary">How did you hear about us?</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl border-primary/20 text-primary">
                        <SelectValue placeholder="Please select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary">How can I help you?*</Label>
                    <Textarea id="message" required placeholder="Tell me a bit about your journey..." className="min-h-[150px] rounded-xl border-primary/20 text-primary" />
                  </div>
                </div>
                <Button type="submit" className="w-full rounded-full py-6 text-lg font-bold bg-primary text-white hover:bg-primary/90">
                  Send Message
                </Button>
                <p className="text-xs text-primary/60 text-center">
                  *Required fields. We respect your privacy and will never share your info.
                </p>
              </form>
            ) : (
              <div className="text-center py-20 space-y-6">
                <h3 className="text-3xl font-headline font-bold text-primary">Thank You!</h3>
                <p className="text-lg text-primary/80">
                  Your message has been received. Sybil will review your inquiry and 
                  respond within the next 24-48 business hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full border-primary text-primary hover:bg-primary/10">
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
