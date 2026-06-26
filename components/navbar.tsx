"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/images/dan-logo.svg"
              alt="DAN The Window Man Logo"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9713380002"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <Phone size={16} />
              971-338-0002
            </a>
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <a href="#contact">Get Free Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground font-semibold py-2 border-b border-border last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9713380002"
              className="flex items-center gap-2 text-primary font-bold py-2"
            >
              <Phone size={16} />
              971-338-0002
            </a>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Get Free Quote
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
