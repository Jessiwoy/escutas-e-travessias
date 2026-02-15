"use client"

import { useState } from "react"
import Image from "next/image"
import { H2, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"
import { BookOpen, Home } from "lucide-react"

export const PraiaSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "", materialId: "" })

  const cards = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Linha 1 — Crescer Diferente",
      subtitle: "livros e e-books para crianças sobre neurodiversidade",
      fullContent: "Histórias que falam de dentro da experiência neurodivergente — sem patologizar, sem explicar \"o outro\", e com a leveza da metáfora, da cor e da imaginação.",
      highlight: "\"Livros para crianças neurodivergentes entenderem a si mesmas — e para as outras aprenderem a conviver com ternura.\"",
      ctaText: "Ver e-books e materiais infantis",
      materialId: "praia_1",
      content: `Linha 1 — Crescer Diferente

Histórias que falam de dentro da experiência neurodivergente — sem patologizar, sem explicar "o outro", e com a leveza da metáfora, da cor e da imaginação.

"Livros para crianças neurodivergentes entenderem a si mesmas — e para as outras aprenderem a conviver com ternura."

Ver e-books e materiais infantis`,
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Linha 2 — Caderno de Travessias",
      subtitle: "materiais práticos e terapêuticos para mães atípicas",
      fullContent: "Materiais feitos por uma mãe para outras mães — ferramentas simples, belas e possíveis para os dias reais. São recursos que ajudam a organizar o tempo, o corpo e o cuidado familiar, sem exigir perfeição.",
      highlight: "",
      ctaText: "Explorar materiais para mães",
      materialId: "praia_2",
      content: `Linha 2 — Caderno de Travessias

Materiais feitos por uma mãe para outras mães — ferramentas simples, belas e possíveis para os dias reais. São recursos que ajudam a organizar o tempo, o corpo e o cuidado familiar, sem exigir perfeição.

Explorar materiais para mães`,
    },
  ]

  const openModal = (title: string, content: string, materialId: string) => {
    setModalContent({ title, content, materialId })
    setModalOpen(true)
  }

  return (
    <>
      <section id="praia" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="relative h-[300px] md:h-full md:min-h-[450px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1 md:col-span-2">
              <Image
                src="/images/5-a-praia.png"
                alt="Crianças brincando na praia com baldes coloridos"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-8 flex flex-col justify-start order-1 md:order-2 md:col-span-3">
              <div>
                <H2 className="mb-4">A Praia</H2>
                <p className="text-lg text-primary-orange font-serif italic mt-4">
                  Onde brincar, cuidar e existir são formas de aprender
                </p>
              </div>

              <Body>
                A Praia é o território das infâncias e das maternidades neurodiversas — um espaço poético e sensorial
                onde a diferença é mar aberto. Aqui moram os{" "}
                <span className="font-semibold">materiais criados para crianças e para mães,</span> pensados como apoios
                afetivos e funcionais, nascidos da experiência real de uma mãe atípica e psicóloga que acredita que o
                cuidado também é forma de conhecimento.
              </Body>

              <div className="grid md:grid-cols-2 gap-6">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    onClick={() => openModal(card.title, card.content, card.materialId)}
                    className="p-6 md:p-8 bg-neutral-cream rounded-lg border-l-4 border-primary-orange hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="flex items-center gap-3 mb-2 min-w-0">
                      <div className="text-primary-orange group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-serif font-semibold text-primary-brown group-hover:text-primary-orange transition-colors break-words min-w-0">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-primary-brown/80 mb-3">{card.subtitle}</p>
                    <p className="text-xs text-primary-brown/90 mb-3">{card.fullContent}</p>
                    {card.highlight && <p className="text-xs font-medium text-primary-brown italic mb-4">{card.highlight}</p>}

                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-primary-brown/20 mt-12">
            <p className="text-xs text-primary-brown/60 text-center">
              Scheilla Soares — psicóloga e mãe atípica CRP 12/01849
              <br />
              Escutas e Travessias — Psicologia e neurodiversidade
            </p>
          </div>
        </div>
      </section>

      <ContentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
        materialId={modalContent.materialId}
      />
    </>
  )
}
