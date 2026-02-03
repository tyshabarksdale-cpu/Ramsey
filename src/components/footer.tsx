import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-headline font-bold">Ramsey Empowerment Collective</span>
            </Link>
            <p className="text-xl font-headline italic text-primary/80">
              "You steer as we pedal"
            </p>
            <p className="max-w-md text-muted-foreground">
              Empowering women and professionals to recognize their strength and step into their power. 
              Based in the Philadelphia area, serving clients everywhere.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Sybil</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/the-collective" className="text-muted-foreground hover:text-primary transition-colors">The Collective</Link></li>
              <li><Link href="/connect" className="text-muted-foreground hover:text-primary transition-colors">Contact & Scheduling</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-lg">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:sybil@ramseyempowerment.com" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ramsey Empowerment Collective, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
