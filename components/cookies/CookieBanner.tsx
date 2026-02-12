"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface CookieBannerProps {
  onAccept: () => void
  onReject: () => void
  onPreferences: () => void
}

export function CookieBanner({ onAccept, onReject, onPreferences }: CookieBannerProps) {
  const [isClosing, setIsClosing] = useState(false)
  const { toast } = useToast()

  const handleAccept = () => {
    setIsClosing(true)
    setTimeout(() => {
      onAccept()
      toast({
        title: "Preferencias salvas",
        description: "Voce aceitou todos os cookies.",
      })
    }, 300)
  }

  const handleReject = () => {
    setIsClosing(true)
    setTimeout(() => {
      onReject()
      toast({
        title: "Preferencias salvas",
        description: "Apenas cookies necessarios estao ativados.",
      })
    }, 300)
  }

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 p-4 transition-all duration-300 ease-out ${
        isClosing
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100 animate-[slide-up_350ms_ease-out]"
      }`}
    >
      <div className="max-w-2xl mx-auto rounded-xl border border-white/20 bg-primary-brown/70 backdrop-blur-md shadow-lg px-5 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-sm text-white/90 leading-relaxed flex-1 font-sans">
            Utilizamos cookies para melhorar sua experiência e o funcionamento do site.{" "}
            <button
              onClick={onPreferences}
              className="underline underline-offset-2 text-primary-gold hover:text-white transition-colors"
            >
              Saiba mais
            </button>
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white border border-white/20 rounded-lg transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={onPreferences}
              className="px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white border border-white/20 rounded-lg transition-colors"
            >
              Preferencias
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 text-xs font-medium bg-primary-orange text-white rounded-lg hover:bg-primary-orange/90 transition-colors"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
