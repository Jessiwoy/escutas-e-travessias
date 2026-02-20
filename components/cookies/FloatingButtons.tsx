"use client"

import { useState } from "react"
import { MessageCircle, Cookie } from "lucide-react"

interface FloatingButtonsProps {
  onCookieClick: () => void
}

export function FloatingButtons({ onCookieClick }: FloatingButtonsProps) {
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false)

  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-30 flex items-end gap-3 group">
        {showWhatsAppTooltip && (
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none animate-in fade-in-up duration-150 shadow-lg md:text-base">
            Posso ajudar?
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}

        <a
          href="https://wa.me/5548992193067"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary-brown hover:bg-primary-brown/80 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110 animate-pulse-soft cursor-pointer"
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>

      {/* Cookie Button - Bottom Left */}
      <button
        onClick={onCookieClick}
        className="fixed bottom-6 left-6 z-30 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary-brown hover:bg-primary-brown/80 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 cursor-pointer"
        aria-label="Preferências de cookies"
        title="Preferências de cookies"
      >
        <Cookie className="w-[18px] h-[18px] md:w-5 md:h-5" />
      </button>
    </>
  )
}
