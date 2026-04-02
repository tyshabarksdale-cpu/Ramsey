
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "The Collective", href: "/the-collective" },
  { name: "Connect", href: "/connect" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentYear = "2025"
  const headerLogo = PlaceHolderImages.find(img => img.id === "brand-logo-header")
  const headerLogoUrl = headerLogo?.imageUrl || "https://firebasestorage.googleapis.com/v0/b/studio-5463986047-b4104.firebasestorage.app/o/Tandem%20logo%20no%20phrase.png?alt=media&token=df6db688-f696-4111-b7c3-7768de4fc1fb"

  return (
    <motion.header 
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-24 lg:h-40 items-center lg:justify-between px-4 lg:pl-0 lg:pr-12 xl:pr-20 relative max-w-[1920px]">
        {/* Logo - Centered on Mobile/Tablet (Portrait), Far Left on Desktop/Tablet (Landscape) */}
        <Link href="/" className="flex items-center group py-2 mx-auto lg:mx-0 lg:ml-0">
          <div className="relative h-20 w-64 lg:h-36 lg:w-[500px]">
            <Image 
              src={headerLogoUrl}
              alt="Ramsey Empowerment Coaching"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Navigation Actions */}
        <div className="flex items-center lg:static absolute right-4 h-full">
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = mounted && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent relative py-1",
                    isActive ? "text-primary" : "text-primary/70"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </Link>
              )
            })}
            <Button asChild className="rounded-none bg-primary px-8 py-6 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95 font-headline uppercase tracking-widest">
              <a href="https://calendly.com/ramsey-empowerment/15min" target="_blank" rel="noopener noreferrer">
                Start Your Journey
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent -mr-2 text-xs font-bold uppercase tracking-widest text-primary">
                  Menu
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Access the main sections of Ramsey Empowerment Coaching.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => {
                    const isActive = mounted && pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-xl font-headline transition-colors hover:text-primary",
                          isActive ? "text-primary font-bold" : "text-primary/70"
                        )}
                      >
                        {link.name}
                      </Link>
                    )
                  })}
                  <a
                    href="https://calendly.com/ramsey-empowerment/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="rounded-none bg-primary px-6 py-4 text-center text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-md mt-2 font-headline"
                  >
                    Start Your Journey
                  </a>
                </div>
                <div className="mt-auto pb-8 text-center text-xs text-primary/60">
                  <p>© {currentYear} Ramsey Empowerment Collective, LLC</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
