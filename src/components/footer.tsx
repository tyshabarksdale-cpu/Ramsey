"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentYear = mounted ? new Date().getFullYear().toString() : "2025"

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2 space-y-6 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-headline font-bold text-primary">Ramsey Empowerment Coaching</span>
            </Link>
            <p className="text-xl font-headline italic text-primary/80">
              "You steer as we pedal"
            </p>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Empowering women and professionals to recognize their strength and step into their power. 
              Based in the Louisville (Kentuckiana) area, serving clients everywhere.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Sybil Elise</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/the-collective" className="text-muted-foreground hover:text-primary transition-colors">The Collective</Link></li>
              <li><Link href="/connect" className="text-muted-foreground hover:text-primary transition-colors">Contact & Scheduling</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg text-primary">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/ramsey-empowerment/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:underline uppercase tracking-widest">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/CoachSybil" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:underline uppercase tracking-widest">
                Instagram (@CoachSybil)
              </a>
              <a href="mailto:Ramsey.empowerment@gmail.com" className="text-sm font-bold text-primary hover:underline uppercase tracking-widest">
                Email
              </a>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              © {currentYear} Ramsey Empowerment Coaching, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}