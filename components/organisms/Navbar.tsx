"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useScrollSpy } from "@/hooks/useScrollSpy"

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Início", id: "hero" },
    { label: "Serviços", id: "correnteza" },
    { label: "Sobre", id: "nascente" },
    { label: "Contato", id: "contato" },
  ]

  const activeSection = useScrollSpy(navLinks.map((link) => link.id))

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        "bg-cover bg-center bg-no-repeat",
      )}
      style={{
        backgroundImage: "url(/navbar.png)",
        backgroundSize: "cover",
      }}
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - sempre visível */}
          <div className="flex items-center">
            <Image
              src="/logo-semfundo.png"
              alt="Escutas e Travessias"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "font-sans md:text-base transition-all duration-150 relative",
                  "text-white drop-shadow-lg pb-1",
                  activeSection === link.id ? "text-primary-brown font-semibold" : "hover:text-primary-brown",
                )}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary-brown transition-all duration-300",
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-150 relative z-50"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 w-full bg-white transition-all duration-300 origin-center",
                  isMobileMenuOpen && "rotate-45 translate-y-2",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-white transition-all duration-300",
                  isMobileMenuOpen && "opacity-0 scale-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-white transition-all duration-300 origin-center",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2",
                )}
              />
            </div>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-black/20 backdrop-blur-sm animate-in slide-in-from-top duration-150"
          >
            <div className="py-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "block w-full text-left px-6 py-3 transition-colors duration-150",
                    "font-sans text-sm border-b border-white/10",
                    activeSection === link.id ? "bg-white/20 text-white font-semibold" : "text-white hover:bg-white/10",
                  )}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
