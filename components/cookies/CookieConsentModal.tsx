"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/atoms/Button"
import type { CookiePreferences } from "@/hooks/useCookieConsent"

interface CookieConsentModalProps {
  isOpen: boolean
  preferences: CookiePreferences
  onSave: (preferences: Partial<CookiePreferences>) => void
  onReject: () => void
  onAcceptAll: () => void
  onClose: () => void
}

interface CookieInfo {
  name: string
  category: keyof Omit<CookiePreferences, "timestamp">
  description: string
}

export function CookieConsentModal({
  isOpen,
  preferences,
  onSave,
  onReject,
  onAcceptAll,
  onClose,
}: CookieConsentModalProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    necessary: true,
  })
  const [cookies, setCookies] = useState<CookieInfo[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const allCookies = document.cookie.split(";").filter((cookie) => cookie.trim())
    const categorizedCookies: CookieInfo[] = allCookies.map((cookie) => {
      const name = cookie.split("=")[0].trim()
      let category: keyof Omit<CookiePreferences, "timestamp"> = "necessary"

      if (name.includes("_ga") || name.includes("analytics")) category = "analytics"
      else if (name.includes("fbp") || name.includes("_fbc") || name.includes("ads")) category = "ads"
      else if (name.includes("_hjid") || name.includes("performance")) category = "performance"
      else if (name.includes("session") || name.includes("preferences")) category = "functional"

      return {
        name,
        category,
        description: `Cookie: ${name}`,
      }
    })

    setCookies(categorizedCookies.length > 0 ? categorizedCookies : [])
  }, [])

  if (!isOpen) return null

  const toggleCategory = (category: string) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const getCookiesForCategory = (category: string) => {
    return cookies.filter((c) => c.category === category)
  }

  const handleAcceptAll = () => {
    onAcceptAll()
    toast({
      title: "Preferências salvas",
      description: "Você aceitou todos os cookies.",
    })
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleReject = () => {
    onReject()
    toast({
      title: "Preferências salvas",
      description: "Apenas cookies necessários estão ativados.",
    })
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleSave = () => {
    onSave(preferences)
    toast({
      title: "Preferências salvas",
      description: "Suas escolhas foram armazenadas.",
    })
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl max-w-lg w-[90vw] max-h-[75vh] sm:max-h-[70vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-primary-brown/10">
            <h2 className="text-xl md:text-2xl font-serif font-semibold text-primary-brown pr-4 text-balance">
              Personalizar preferências de consentimento
            </h2>
            <button
              onClick={handleClose}
              className="text-primary-brown hover:text-primary-orange transition-colors duration-150 flex-shrink-0"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content with scroll */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
            {/* Introduction */}
            <div className="space-y-3 text-sm text-primary-brown/80 leading-relaxed font-sans">
              <p>
                Utilizamos cookies para ajudar você a navegar com eficiência e executar certas funções. Você encontrará
                informações detalhadas sobre todos os cookies sob cada categoria de consentimento abaixo.
              </p>
              <p>
                Os cookies que são classificados com a marcação "Necessário" são armazenados em seu navegador, pois são
                essenciais para possibilitar o uso de funcionalidades básicas do site.
              </p>
              <p>
                Também usamos cookies de terceiros que nos ajudam a analisar como você usa este site, armazenar suas
                preferências e fornecer conteúdo e anúncios que sejam relevantes para você. Esses cookies somente serão
                armazenados em seu navegador mediante seu prévio consentimento.
              </p>
              <p>
                Você pode optar por ativar ou desativar alguns ou todos esses cookies, mas desativá-los pode afetar sua
                experiência de navegação.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              {/* Necessary */}
              <div className="border border-primary-brown/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory("necessary")}
                  className="w-full flex items-center justify-between p-4 hover:bg-neutral-cream/30 transition-colors duration-150 text-left"
                  aria-expanded={expanded.necessary}
                >
                  <span className="font-serif font-semibold text-primary-brown">Necessário</span>
                  <span className="text-green-600 font-semibold text-sm font-sans">Sempre ativo</span>
                </button>
                {expanded.necessary && (
                  <div className="px-4 pb-4 pt-0 text-sm text-primary-brown/80 space-y-3 border-t border-primary-brown/10 font-sans animate-in slide-in-from-top duration-200">
                    <p>
                      Os cookies necessários são cruciais para as funções básicas do site e o site não funcionará como
                      pretendido sem eles. Esses cookies não armazenam nenhum dado pessoalmente identificável.
                    </p>
                    <div className="bg-neutral-cream/50 px-3 py-2 rounded text-primary-brown/70 text-xs">
                      {getCookiesForCategory("necessary").length > 0
                        ? getCookiesForCategory("necessary").map((c) => (
                            <div key={c.name} className="py-1">
                              {c.name}
                            </div>
                          ))
                        : "Sem cookies para exibir."}
                    </div>
                  </div>
                )}
              </div>

              {/* Functional */}
              <div className="border border-primary-brown/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory("functional")}
                  className="w-full flex items-center justify-between p-4 hover:bg-neutral-cream/30 transition-colors duration-150 text-left"
                  aria-expanded={expanded.functional}
                >
                  <span className="font-serif font-semibold text-primary-brown">Funcional</span>
                </button>
                {expanded.functional && (
                  <div className="px-4 pb-4 pt-0 text-sm text-primary-brown/80 space-y-3 border-t border-primary-brown/10 font-sans animate-in slide-in-from-top duration-200">
                    <p>
                      Cookies funcionais ajudam a executar determinadas funcionalidades, como compartilhamento de
                      conteúdo em redes sociais, coleta de feedback e habilitação de integrações com serviços de
                      terceiros.
                    </p>
                    <div className="bg-neutral-cream/50 px-3 py-2 rounded text-primary-brown/70 text-xs">
                      {getCookiesForCategory("functional").length > 0
                        ? getCookiesForCategory("functional").map((c) => (
                            <div key={c.name} className="py-1">
                              {c.name}
                            </div>
                          ))
                        : "Sem cookies para exibir."}
                    </div>
                  </div>
                )}
              </div>

              {/* Analytics */}
              <div className="border border-primary-brown/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory("analytics")}
                  className="w-full flex items-center justify-between p-4 hover:bg-neutral-cream/30 transition-colors duration-150 text-left"
                  aria-expanded={expanded.analytics}
                >
                  <span className="font-serif font-semibold text-primary-brown">Analíticos</span>
                </button>
                {expanded.analytics && (
                  <div className="px-4 pb-4 pt-0 text-sm text-primary-brown/80 space-y-3 border-t border-primary-brown/10 font-sans animate-in slide-in-from-top duration-200">
                    <p>
                      Cookies analíticos são usados para entender como os visitantes interagem com o site. Eles ajudam a
                      coletar informações como número de visitantes, taxa de rejeição, origem de tráfego, páginas mais
                      visitadas e tempo de navegação.
                    </p>
                    <div className="bg-neutral-cream/50 px-3 py-2 rounded text-primary-brown/70 text-xs">
                      {getCookiesForCategory("analytics").length > 0
                        ? getCookiesForCategory("analytics").map((c) => (
                            <div key={c.name} className="py-1">
                              {c.name}
                            </div>
                          ))
                        : "Sem cookies para exibir."}
                    </div>
                  </div>
                )}
              </div>

              {/* Performance */}
              <div className="border border-primary-brown/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory("performance")}
                  className="w-full flex items-center justify-between p-4 hover:bg-neutral-cream/30 transition-colors duration-150 text-left"
                  aria-expanded={expanded.performance}
                >
                  <span className="font-serif font-semibold text-primary-brown">Desempenho</span>
                </button>
                {expanded.performance && (
                  <div className="px-4 pb-4 pt-0 text-sm text-primary-brown/80 space-y-3 border-t border-primary-brown/10 font-sans animate-in slide-in-from-top duration-200">
                    <p>
                      Cookies de desempenho ajudam a analisar e entender os principais índices de performance do site,
                      permitindo avaliar velocidade, monitorar estabilidade e otimizar carregamento e comportamento
                      visual.
                    </p>
                    <div className="bg-neutral-cream/50 px-3 py-2 rounded text-primary-brown/70 text-xs">
                      {getCookiesForCategory("performance").length > 0
                        ? getCookiesForCategory("performance").map((c) => (
                            <div key={c.name} className="py-1">
                              {c.name}
                            </div>
                          ))
                        : "Sem cookies para exibir."}
                    </div>
                  </div>
                )}
              </div>

              {/* Ads */}
              <div className="border border-primary-brown/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory("ads")}
                  className="w-full flex items-center justify-between p-4 hover:bg-neutral-cream/30 transition-colors duration-150 text-left"
                  aria-expanded={expanded.ads}
                >
                  <span className="font-serif font-semibold text-primary-brown">Anúncio</span>
                </button>
                {expanded.ads && (
                  <div className="px-4 pb-4 pt-0 text-sm text-primary-brown/80 space-y-3 border-t border-primary-brown/10 font-sans animate-in slide-in-from-top duration-200">
                    <p>
                      Cookies de anúncios são usados para entregar anúncios personalizados com base nas páginas que você
                      já visitou, medir a eficácia de campanhas e criar segmentações de público. Esses cookies são
                      ativados apenas mediante seu consentimento explícito.
                    </p>
                    <div className="bg-neutral-cream/50 px-3 py-2 rounded text-primary-brown/70 text-xs">
                      {getCookiesForCategory("ads").length > 0
                        ? getCookiesForCategory("ads").map((c) => (
                            <div key={c.name} className="py-1">
                              {c.name}
                            </div>
                          ))
                        : "Sem cookies para exibir."}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-primary-brown/10 p-3 flex flex-col sm:flex-row gap-2">
            <Button onClick={handleReject} variant="ghost" className="flex-1 py-1.5 text-xs shadow-none">
              Rejeitar
            </Button>
            <Button
              onClick={handleSave}
              variant="secondary"
              className="flex-1 py-1.5 text-xs border border-primary-orange/40 bg-transparent text-primary-brown hover:bg-primary-orange/10 shadow-none hover:shadow-none"
            >
              Salvar preferencias
            </Button>
            <Button onClick={handleAcceptAll} variant="primary" className="flex-1 py-1.5 text-xs">
              Aceitar tudo
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
