"use client"

import type React from "react"
import { useState } from "react"
import { H2 } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"
import { Check, Loader2, AlertCircle } from "lucide-react"
import { formatPhoneNumber } from "@/lib/formatPhone"
import { sendContactEmail } from "@/lib/emailService"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "Neurodiversidade",
    otherSubject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<FormErrors>({})

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Nome é obrigatório"
        if (value.trim().length < 3) return "Nome deve ter pelo menos 3 caracteres"
        break
      case "email":
        if (!value.trim()) return "E-mail é obrigatório"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "E-mail inválido"
        break
      case "message":
        if (!value.trim()) return "Mensagem é obrigatória"
        if (value.trim().length < 10) return "Mensagem deve ter pelo menos 10 caracteres"
        break
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")

    // Validate all fields
    const newErrors: FormErrors = {}
    newErrors.name = validateField("name", formData.name)
    newErrors.email = validateField("email", formData.email)
    newErrors.message = validateField("message", formData.message)

    const hasErrors = Object.values(newErrors).some((error) => error !== undefined)

    if (hasErrors) {
      setErrors(newErrors)
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
      return
    }

    const topic = formData.subject === "Outro" ? formData.otherSubject : formData.subject

    const result = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      topic: topic,
      message: formData.message,
    })

    if (result.success) {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        subject: "Neurodiversidade",
        otherSubject: "",
        message: "",
      })
      setErrors({})

      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000)
    } else {
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "whatsapp") {
      const formatted = formatPhoneNumber(value)
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section
      id="contato"
      className="py-12 md:py-20 bg-gradient-to-br from-primary-orange/10 via-neutral-cream/50 to-primary-gold/10"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <H2 className="mb-3 md:mb-4">Entre em contato</H2>
          <p className="text-lg text-primary-orange font-serif italic mt-4">Aqui, voce encontra um espaco seguro para ser ouvida. Escolha o assunto, escreva sua mensagem pelo formulario abaixo e eu retornarei com carinho.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 animate-fade-in-up max-w-xl mx-auto">
          {formStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-in slide-in-from-top duration-300">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-sm text-green-700">Mensagem enviada com sucesso! Retornaremos em breve.</span>
            </div>
          )}

          {formStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-in slide-in-from-top duration-300">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-sm text-red-700">Por favor, corrija os erros no formulário.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-brown mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={formStatus === "loading"}
                className={`w-full px-4 py-2.5 bg-neutral-cream/30 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-primary-brown transition-all duration-200 disabled:opacity-60 ${
                  errors.name ? "border-red-400" : "border-neutral-taupe/30"
                }`}
                placeholder="Seu nome"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-600 animate-in fade-in duration-200">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-brown mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={formStatus === "loading"}
                  className={`w-full px-4 py-2.5 bg-neutral-cream/30 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-primary-brown transition-all duration-200 disabled:opacity-60 ${
                    errors.email ? "border-red-400" : "border-neutral-taupe/30"
                  }`}
                  placeholder="seu@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600 animate-in fade-in duration-200">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-primary-brown mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  disabled={formStatus === "loading"}
                  className="w-full px-4 py-2.5 bg-neutral-cream/30 border-2 border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-primary-brown transition-all duration-200 disabled:opacity-60"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary-brown mb-2">
                Sobre o que você gostaria de falar?
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={formStatus === "loading"}
                className="w-full px-4 py-2.5 bg-neutral-cream/30 border-2 border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-primary-brown transition-all duration-200 disabled:opacity-60"
              >
                <option value="Neurodiversidade">Neurodiversidade</option>
                <option value="Maternidade Atípica">Maternidade Atípica</option>
                <option value="Mentoria">Mentoria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {formData.subject === "Outro" && (
              <div className="animate-in slide-in-from-top duration-200">
                <label htmlFor="otherSubject" className="block text-sm font-medium text-primary-brown mb-2">
                  Qual é o seu assunto?
                </label>
                <input
                  type="text"
                  id="otherSubject"
                  name="otherSubject"
                  value={formData.otherSubject}
                  onChange={handleChange}
                  disabled={formStatus === "loading"}
                  className="w-full px-4 py-2.5 bg-neutral-cream/30 border-2 border-neutral-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-primary-brown transition-all duration-200 disabled:opacity-60"
                  placeholder="Descreva seu assunto..."
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-brown mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={formStatus === "loading"}
                className={`w-full px-4 py-2.5 bg-neutral-cream/30 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent text-primary-brown resize-none transition-all duration-200 disabled:opacity-60 ${
                  errors.message ? "border-red-400" : "border-neutral-taupe/30"
                }`}
                placeholder="Conte um pouco sobre o que você precisa..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-600 animate-in fade-in duration-200">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={formStatus === "loading"} className="w-full relative py-2 text-sm">
              {formStatus === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2 inline-block" />
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
