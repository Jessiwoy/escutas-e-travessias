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
        src="/images/hero.jpg"
        alt="Trapiche ao pôr do sol - Escutas e Travessias"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />

      <div className="absolute inset-0 bg-black/15" />

      <div className="absolute inset-x-0 top-[14%] sm:top-[18%] md:top-[21%] z-10 text-center flex flex-col items-center px-4">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          Escutas e Travessias
        </h1>
        <p className="font-[family-name:var(--font-hero-subtitle)] text-sm sm:text-base md:text-lg lg:text-xl italic text-black mt-2 md:mt-3 tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
          Neurodiversidade, Psicologia e Maternidade Atípica
        </p>
      </div>

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
