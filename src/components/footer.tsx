
"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Mail } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Footer() {
  const footerLogo = PlaceHolderImages.find(img => img.id === "brand-logo-footer")
  const footerLogoUrl = footerLogo?.imageUrl || "https://firebasestorage.googleapis.com/v0/b/studio-5463986047-b4104.firebasestorage.app/o/Tandem%20logo%20with%20phrase.png?alt=media&token=3087b72a-4860-483d-805f-3a7e5a930fdb"

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="md:col-span-4 space-y-6 flex flex-col items-center text-center">
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-40 w-[300px] sm:w-[500px] bg-transparent">
                <Image 
                  src={footerLogoUrl}
                  alt="Ramsey Empowerment Coaching"
                  fill
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </Link>
          </div>
          
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-headline font-bold text-lg text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-base">About Sybil Elise</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-base">Our Services</Link></li>
              <li><Link href="/the-collective" className="text-muted-foreground hover:text-primary transition-colors text-base">The Collective</Link></li>
              <li><Link href="/connect" className="text-muted-foreground hover:text-primary transition-colors text-base">Contact & Scheduling</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-3">
              <h4 className="font-headline font-bold text-lg text-primary">Connect</h4>
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/company/ramsey-empowerment/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a 
                  href="https://www.instagram.com/CoachSybil" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a 
                  href="mailto:Ramsey.empowerment@gmail.com" 
                  className="text-primary hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
            
            <div className="pt-4 border-t border-primary/10 max-w-[400px] mx-auto">
              <p className="text-sm text-muted-foreground font-medium">
                © 2025 Ramsey Empowerment Collective, LLC
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
