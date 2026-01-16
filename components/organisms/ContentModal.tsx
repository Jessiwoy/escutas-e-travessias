"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { sendLeadEmails } from "@/lib/emailService"
import { useToast } from "@/hooks/use-toast"

interface ContentModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  materialId?: string
}

export const ContentModal = ({ isOpen, onClose, title, content, materialId }: ContentModalProps) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (honeypot.trim() !== "") {
      return
    }

    try {
      const lastSubmit = localStorage.getItem("escutas_et_last_submit")
      if (lastSubmit) {
        const elapsed = Date.now() - Number.parseInt(lastSubmit, 10)
        if (elapsed < 60000) {
          return
        }
      }
    } catch (error) {
      // Ignore localStorage errors
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      })
      return
    }

    if (!materialId) {
      toast({
        title: "Erro",
        description: "Material não especificado.",
        variant: "destructive",
      })
      return
    }

    try {
      localStorage.setItem("escutas_et_last_submit", Date.now().toString())
    } catch (error) {
      // Ignore localStorage errors
    }

    setIsLoading(true)

    try {
      const result = await sendLeadEmails({
        name,
        email,
        materialId,
      })

      if (result.success) {
        onClose()
        toast({
          title: "Obrigada por chegar até aqui.",
          description:
            "Seu material já está a caminho.\nO Escutas e Travessias é um espaço de cuidado, reflexão e travessia possível — vá no seu tempo.",
          duration: 8000,
        })
        setName("")
        setEmail("")
        setHoneypot("")
      } else if (result.message === "unavailable") {
        toast({
          title: "Material em breve",
          description: "Este material ainda não está disponível. Em breve você receberá uma atualização.",
          duration: 6000,
        })
      } else {
        toast({
          title: "Ops!",
          description: result.message,
          variant: "destructive",
          duration: 6000,
        })
      }
    } catch (error) {
      console.error("[v0] Erro ao processar download:", error)
      toast({
        title: "Ops!",
        description: "Algo não saiu como esperado. Pode tentar de novo? Se preferir, me chama no WhatsApp.",
        variant: "destructive",
        duration: 6000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white/95 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-brown hover:text-primary-orange transition-colors"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-serif font-semibold text-primary-brown mb-6">{title}</h2>

          <p className="text-primary-brown/80 mb-6 leading-relaxed">
            Para acessar este conteúdo, deixe seu email. Você receberá materiais e atualizações diretamente no seu
            coração.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              aria-hidden="true"
            />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-brown mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-primary-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange bg-white disabled:opacity-50"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-brown mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-primary-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange bg-white disabled:opacity-50"
                placeholder="seu@email.com"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Receber conteúdo"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
