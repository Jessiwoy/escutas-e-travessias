"use client"
import { H2, Subtitle, Body } from "@/components/atoms/Typography"
import { Leaf, Zap, MessageCircle, Shield, Headphones, Clock, Smile } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useEffect, useState } from "react"

export const CorrentezaSection = () => {
  const { ref: sectionRef, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })
  const [animatedBullets, setAnimatedBullets] = useState<boolean[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const bulletCount = 5
    if (hasIntersected && !prefersReducedMotion) {
      setAnimatedBullets(Array(bulletCount).fill(false))

      const delays = Array.from({ length: bulletCount }, (_, i) => i * 200)
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setAnimatedBullets((prev) => {
            const newState = [...prev]
            newState[index] = true
            return newState
          })
        }, delay)
      })
    } else if (hasIntersected && prefersReducedMotion) {
      // If reduced motion is enabled, show all bullets immediately
      setAnimatedBullets(Array(bulletCount).fill(true))
    }
  }, [hasIntersected, prefersReducedMotion])

  const iconComponents = [MessageCircle, Shield, Headphones, Clock, Smile]

  const modalities = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Avaliação Inicial e Mentoria Simples",
      description:
        "Um primeiro mergulho na sua história cognitiva e emocional. Inclui entrevistas, questionários e devolutiva personalizada com orientações práticas. Ideal para quem busca autoconhecimento e quer compreender melhor atenção, memória, regulação emocional e sobrecarga sensorial.",
      finalQuote: "A avaliação começa com perguntas, mas termina em reconhecimento.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Aprofundamentos Específicos",
      description:
        "Para quem deseja seguir além da avaliação inicial. Podem incluir o mapeamento das funções executivas, análise do perfil de atenção e regulação emocional, e acompanhamento por mentoria. Cada percurso é único — construído junto à pessoa, conforme as necessidades e o ritmo do processo. Essas trilhas ampliadas contemplam autismo, TDAH e perfis sobrepostos, e ajudam a transformar a descoberta em um processo de fortalecimento e presença.",
      subItems: [
        "Travessia da Comunicação e Conexão — relações, linguagem e energia social.",
        "Travessia da Previsibilidade e Rotina — estrutura, transições e segurança.",
        "Travessia da Sensação e Sobrecarga — equilíbrio sensorial e autorregulação.",
        "Travessia do Tempo e da Atenção — ritmo, foco e prazer nas tarefas.",
        "Travessia da Emoção e Impulsividade — regulação afetiva e expressão simbólica.",
      ],
      finalQuote: "A cada travessia, o mar ensina que compreender é, também, continuar.",
    },
  ]

  return (
    <section id="correnteza" className="py-16 md:py-24 bg-neutral-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-12">
          <H2 className="mb-4">Correnteza</H2>
          <Subtitle>Avaliação neurofuncional e mentorias</Subtitle>

          <div className="bg-primary-gold/10 rounded-lg p-6 border-l-4 border-primary-gold mt-8 mb-8">
            <p className="text-sm italic text-primary-brown">
              "Há caminhos que só se revelam quando paramos de lutar contra a própria maré."
            </p>
          </div>

          <div className="mt-8 mb-12">
            <Body className="mb-4">
              Correnteza é o espaço da escuta clínica — onde ciência e sensibilidade se encontram para compreender o
              funcionamento cognitivo, emocional e sensorial de cada pessoa. É aqui que o mar ganha direção.
            </Body>
            <Body className="mb-4">
              Depois de décadas escutando o outro e a mim mesma, compreendi que a avaliação psicológica pode ser um ato
              de cuidado e reconciliação, não apenas um processo técnico. Avaliar é escutar o modo como a mente respira.
            </Body>
            <Body className="mb-4">
              A <span className="font-bold">avaliação neuropsicológica</span> nasce dessa visão: um processo que une os
              fundamentos da neuropsicologia à escuta viva da experiência. Mais do que medir, ela busca compreender o
              que sustenta e o que sobrecarrega — especialmente em mulheres e adultos neurodivergentes que, por anos,
              aprenderam a mascarar o próprio funcionamento.
            </Body>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-primary-brown mb-8">Modalidades</h3>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_300px] gap-6 mb-12">
          {modalities.map((mod, cardIndex) => (
            <div
              key={mod.title}
              className={`relative p-6 bg-white rounded-lg border-l-4 border-primary-orange hover:shadow-lg transition-shadow duration-300 flex flex-col h-full min-w-0 ${
                cardIndex === 1 ? "lg:pr-12" : ""
              }`}
            >
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-primary-orange flex-shrink-0">{mod.icon}</div>
                  <h3 className="text-base font-serif font-semibold text-primary-brown">{mod.title}</h3>
                </div>

                <Body className="text-sm mb-4">{mod.description}</Body>
              </div>

              {mod.subItems && (
                <div className="flex flex-col gap-3 my-4 lg:hidden">
                  {mod.subItems.map((item, index) => {
                    const IconComponent = iconComponents[index]
                    return (
                      <div
                        key={item}
                        className={`transition-all duration-500 ${
                          animatedBullets[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                      >
                        <div className="bg-white/50 rounded-full px-3 py-2 border border-primary-orange/20 flex items-center gap-2 shadow-sm hover:shadow-md active:shadow-md transition-all duration-200 ease-out hover:border-primary-orange/35 active:border-primary-orange/35 hover:-translate-y-[1px] active:-translate-y-[1px] focus-visible:ring-2 ring-primary-orange/30">
                          {IconComponent && <IconComponent className="w-4 h-4 text-primary-orange flex-shrink-0" />}
                          <p className="text-xs text-primary-brown/80">{item}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="border-t border-primary-brown/10 my-4" />

              <div className="mt-auto pt-4">
                <p className="text-sm italic text-primary-brown/70">{mod.finalQuote}</p>
              </div>
            </div>
          ))}

          {modalities[1].subItems && (
            <div className="hidden lg:flex flex-col gap-4 pt-0 overflow-visible">
              {modalities[1].subItems.map((item, index) => {
                const IconComponent = iconComponents[index]
                return (
                  <div
                    key={item}
                    className={`flex flex-col items-start transition-all duration-500 ${
                      animatedBullets[index] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                    }`}
                  >
                    <div className="relative lg:w-[360px] lg:max-w-none lg:-ml-16 lg:z-10 bg-white/50 backdrop-blur-sm rounded-full px-3 py-2 pl-6 pr-3 border border-primary-orange/20 flex items-center gap-0 min-w-0 overflow-visible shadow-sm hover:shadow-md transition-all duration-200 ease-out hover:border-primary-orange/35 hover:-translate-y-[1px] focus-visible:ring-2 ring-primary-orange/30">
                      {IconComponent && (
                        <div className="absolute left-1 top-1/2 -translate-y-1/2 -translate-x-1">
                          <IconComponent className="w-4 h-4 text-primary-orange flex-shrink-0" />
                        </div>
                      )}
                      <p className="text-xs text-primary-brown/80 whitespace-normal break-words">{item}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="text-center mb-12">
          <Body className="mb-4">
            Cada trilha inclui práticas, rituais de cuidado e materiais personalizados — guias, diários e kits digitais
            — criados a partir da escuta e da história de vida de cada pessoa.
          </Body>
          <p className="text-sm italic text-primary-brown/70">
            "A cada travessia, o mar ensina que compreender é, também, continuar."
          </p>
        </div>

        <div className="pt-6 border-t border-primary-brown/20">
          <p className="text-xs text-primary-brown/60 text-center">
            Scheilla Soares — psicóloga e mãe atípica CRP 12/01849
            <br />
            Escutas e Travessias — Psicologia e neurodiversidade
          </p>
        </div>
      </div>
    </section>
  )
}
