"use client"

import { useState } from "react"
import Image from "next/image"
import { H2, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"
import { Wind, Flower2, Heart } from "lucide-react"

export const EnseadaSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "", materialId: "" })

  const cards = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Aprendendo a parar",
      description: "porque parar é, hoje, um ato de coragem.",
      borderColor: "border-primary-brown",
      materialId: "enseada_1",
      fullContent: "Este material oferece práticas simples e eficazes para interromper o fluxo automático das tarefas e redescobrir o espaço entre um compromisso e outro.",
      highlight: "Parar não é desistir: é abrir espaço para existir com consciência.",
      ctaText: "Baixar o guia e começar agora",
    },
    {
      icon: <Flower2 className="w-6 h-6" />,
      title: "Escutando o corpo",
      description: "o corpo fala, mesmo quando a mente insiste em seguir.",
      borderColor: "border-primary-orange",
      materialId: "enseada_2",
      fullContent: "Este material reúne exercícios de reconexão sensorial baseados em estudos sobre sobrecarga e autorregulação.",
      highlight: "A escuta do corpo é o primeiro passo para a restauração da energia vital.",
      ctaText: "Quero escutar meu corpo",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultivando presença",
      description: "reconectar-se é lembrar-se de si.",
      borderColor: "border-primary-gold",
      materialId: "enseada_3",
      fullContent: "Este material propõe rituais simbólicos e gestos de autocuidado que integram corpo, afeto e espiritualidade cotidiana.",
      highlight: "Cuidar da alma é reencontrar o ritmo natural do ser.",
      ctaText: "Desejo cultivar presença",
    },
  ]

  const openModal = (title: string, materialId: string) => {
    setModalContent({ title, content: "", materialId })
    setModalOpen(true)
  }

  return (
    <>
      <section id="enseada" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6 flex flex-col justify-start order-1 md:order-1">
            <H2>A Enseada</H2>
            <Subtitle>Autocuidado e respiro</Subtitle>
            
            <Quote>"Às vezes, cuidar de si é apenas aprender a respirar entre as tarefas."</Quote>
            
            <Body>
              A <span className="font-semibold">Enseada</span> é o lugar sagrado do corpo e da pausa consciente. Um
              refúgio onde o tempo desacelera e você pode, enfim, ouvir sua própria respiração. O que existe aqui é
              fruto de um <span className="font-semibold">longo aprendizado forjado na vida real</span> — de quando o
              corpo adoeceu e eu precisei descobrir, entre uma tarefa e outra,{" "}
              <span className="font-semibold">como cuidar de mim em meio ao cuidado com os outros.</span>
            </Body>

            {/* Mobile-only image: appears between paragraphs */}
            <div className="relative h-[280px] rounded-lg overflow-hidden shadow-xl md:hidden">
              <Image
                src="/images/2-enseada.png"
                alt="Enseada serena com água turquesa e vegetação tropical"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <Body>
              Não havia tempo livre, nem silêncio, nem pausas longas. Ainda assim, aprendi que o autocuidado é
              possível — mesmo dentro da rotina intensa, entre consultas, prazos, responsabilidades e afetos. Meu
              aprendizado nasceu dos estudos sobre <span className="font-semibold">sobrecarga sensorial,</span> mas se
              estendeu muito além disso.
            </Body>

            <Body>
              Percebi que o que vale para pessoas neurodivergentes também vale para qualquer um que viva{" "}
              <span className="font-semibold">sobrecarregado, acelerado, exausto.</span>
            </Body>
            
            <Body>
              Vivemos, como descreve Byung-Chul Han, numa <span className="font-semibold">sociedade do cansaço</span> —
              um tempo em que a produtividade e a hiperexigência substituíram o respirar. E é justamente por isso que
              o que aprendi serve para todos: porque todos, em algum momento, precisam reencontrar o corpo e o ritmo
              da própria alma.
            </Body>

            <Body>
              A <span className="font-semibold">Enseada</span> nasceu como um{" "}
              <span className="font-semibold">contraponto a esse ritmo</span> — um espaço para lembrar que o descanso
              não é desistência, mas presença. O cuidado verdadeiro não depende de condições ideais: ele nasce de
              pequenos gestos que cabem na vida que temos.
            </Body>

            <Body>
              Entre areia molhada e brisa suave, a Enseada sussurra:
            </Body>
            
            <div className="bg-primary-gold/10 rounded-lg p-4 border-l-4 border-primary-gold">
              <p className="text-sm italic text-primary-brown">"Você também merece ser cuidado."</p>
            </div>
            
            <Body className="text-sm">
              Abaixo, compartilho alguns materiais gratuitos inspirados nesse caminho — são práticas simples, mas
              profundamente transformadoras, que representam caminhos de cuidado possíveis.
            </Body>
          </div>

          {/* Desktop-only image: side by side */}
          <div className="relative h-full min-h-[550px] rounded-lg overflow-hidden shadow-xl hidden md:block order-2">
            <Image
              src="/images/2-enseada.png"
              alt="Enseada serena com água turquesa e vegetação tropical"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                onClick={() => openModal(card.title, card.materialId)}
                className={`p-6 md:p-8 bg-neutral-cream rounded-lg border-l-4 ${card.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 flex flex-col h-full`}
              >
                <div className="flex items-center gap-3 mb-3 min-w-0">
                  <div className="text-primary-orange group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary-brown group-hover:text-primary-orange transition-colors break-words min-w-0">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-primary-brown/80 mb-3">{card.description}</p>
                <p className="text-sm text-primary-brown/90 mb-3">{card.fullContent}</p>
                <p className="text-sm font-medium text-primary-brown mb-4">{card.highlight}</p>

              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-primary-brown/20 mt-8">
            <p className="text-xs text-primary-brown/60 text-center">
              Scheilla Soares — psicóloga e neuropsicóloga CRP 12/01849
              <br />
              Escutas e Travessias — Psicologia Neuroafirmativa
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
