
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
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

  // Use a stable year for SSR and initial hydration to prevent mismatches
  const currentYear = mounted ? new Date().getFullYear().toString() : "2025"

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-headline font-bold tracking-tight transition-colors group-hover:text-primary leading-tight text-primary">
              Ramsey Empowerment
            </span>
            <span className="text-sm font-headline italic text-accent font-medium leading-none">
              Collective
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = mounted && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  isActive ? "text-primary font-bold" : "text-primary/70"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            )
          })}
          <Link
            href="/connect"
            className="rounded-full bg-primary px-6 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            Start Your Journey
          </Link>
        </nav>

        {/* Mobile Navigation */}
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
                <SheetDescription>Access the main sections of Ramsey Empowerment Collective.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-8 pt-12">
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
                <Link
                  href="/connect"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-primary px-6 py-4 text-center text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-md mt-4"
                >
                  Start Your Journey
                </Link>
              </div>
              <div className="mt-auto pt-12 text-center text-xs text-primary/60">
                <p>© {currentYear} Ramsey Empowerment Collective</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
