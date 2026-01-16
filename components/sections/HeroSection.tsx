"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

export const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("intro")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center"
      role="banner"
      aria-label="Imagem principal"
    >
      <Image
        src="/images/hero-desktop.jpg"
        alt="Ponte ao pôr do sol - Escutas e Travessias"
        fill
        priority
        className="hidden md:block object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      <Image
        src="/images/hero-mobile.png"
        alt="Ponte ao pôr do sol - Escutas e Travessias"
        fill
        priority
        className="block md:hidden object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white hover:scale-125 transition-all duration-300 z-10 animate-bounce group"
        aria-label="Rolar para baixo"
      >
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="w-10 md:w-12 h-10 md:h-12 drop-shadow-2xl group-hover:drop-shadow-[0_0_8px_rgba(242,203,5,0.8)] transition-all" />
        </div>
      </button>
    </section>
  )
}
