
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentYear = mounted ? new Date().getFullYear().toString() : "2025"

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="md:col-span-4 space-y-6 flex flex-col items-center text-center">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-headline font-bold text-primary">Ramsey Empowerment Coaching</span>
            </Link>
            <p className="text-xl font-headline italic text-primary/80 pb-2">
              "You steer as we pedal"
            </p>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-headline font-bold text-lg text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Sybil Elise</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/the-collective" className="text-muted-foreground hover:text-primary transition-colors">The Collective</Link></li>
              <li><Link href="/connect" className="text-muted-foreground hover:text-primary transition-colors">Contact & Scheduling</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-lg text-primary">Connect</h4>
              <div className="flex items-center justify-center gap-8">
                <a 
                  href="https://www.linkedin.com/company/ramsey-empowerment/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.instagram.com/CoachSybil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a 
                  href="mailto:Ramsey.empowerment@gmail.com" 
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-primary/10 max-w-[320px] mx-auto">
              <p className="text-sm text-muted-foreground font-medium">
                © {currentYear} Ramsey Empowerment Coaching, LLC.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
