"use client"

import { useState } from "react"
import { H2, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { IconCard } from "@/components/molecules/IconCard"
import { ContentModal } from "@/components/organisms/ContentModal"
import { Brain, Cast as Mask, Users } from "lucide-react"

export const EspelhoSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "", materialId: "" })

  const cards = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Reconhecimento tardio",
      description: "Descobrindo-se neurodivergente na vida adulta",
      materialId: "espelho_1", // Adicionado materialId
      content: `Reconhecimento Tardio

Descobrir-se neurodivergente na vida adulta é como finalmente encontrar a peça que faltava no quebra-cabeça da própria vida.

De repente, tudo faz sentido:
• Por que sempre se sentiu diferente
• Por que certas situações eram tão exaustivas
• Por que precisava de mais tempo, mais silêncio, mais espaço

O reconhecimento tardio não é perda de tempo. É reencontro consigo mesma.

Você não mudou. Apenas finalmente se vê com clareza.`,
    },
    {
      icon: <Mask className="w-6 h-6" />,
      title: "Mascaramento",
      description: "Compreendendo o custo de esconder quem somos",
      materialId: "espelho_2", // Adicionado materialId
      content: `Mascaramento

Por anos, você aprendeu a esconder. A imitar. A moldar-se para caber.

O mascaramento é o esforço invisível de parecer "normal":
• Forçar contato visual quando é desconfortável
• Rir de piadas que não entende
• Esconder seus interesses intensos
• Fingir que barulhos não incomodam

Mas esse esforço tem custo. Exaustão. Burnout. Perda de si mesma.

Reconhecer o mascaramento é o primeiro passo para parar de se esconder.`,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Outras Travessias",
      description:
        "Nesta seção, compartilho histórias de profissionais que, já na vida adulta e em plena atuação clínica, descobriram em si mesmos a neurodivergência",
      materialId: "espelho_3", // Adicionado materialId
      content: `Outras Travessias

Nesta seção, compartilho histórias de profissionais que, já na vida adulta e em plena atuação clínica, descobriram em si mesmos a neurodivergência.

São narrativas que mostram que:
• O reconhecimento não tem idade
• A diferença pode coexistir com sucesso profissional
• A descoberta de si é sempre possível
• A transparência sobre nossa própria neurodivergência transforma a prática clínica

Essas histórias são convites para que você também se reconheça, se celebre e compartilhe sua própria jornada.`,
    },
  ]

  const openModal = (title: string, content: string, materialId: string) => {
    setModalContent({ title, content, materialId })
    setModalOpen(true)
  }

  return (
    <>
      <section id="espelho" className="py-16 md:py-24 bg-neutral-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <H2 className="mb-4">O Espelho-d'Água</H2>
            <Subtitle>Neurodiversidade e reconhecimento</Subtitle>

            <Quote className="my-8 text-left">
              "Nem todo labirinto é prisão — alguns são apenas formas diferentes de pensar."
            </Quote>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Body>
              O <span className="font-semibold">Espelho-d'Água</span> é o mar que reflete sem distorcer. Um espaço de
              reconhecimento para pessoas neurodivergentes e para todas aquelas que intuem que há algo em si que
              funciona de outro modo — e querem compreender suas formas de perceber, sentir e estar no mundo com mais
              verdade e leveza. Aqui, o reflexo não julga nem corrige: apenas devolve o que é verdadeiro e belo em sua
              complexidade.
            </Body>

            <Body>
              Mesmo sendo <span className="font-semibold">psicóloga, neuropsicóloga e mãe atípica,</span> levei tempo
              para reconhecer minha própria neurodivergência. O ponto de virada veio quando deixei de falar de "traços"
              e me perguntei: "E se tudo isso tiver a ver com o autismo?" A partir daí, comecei a olhar para minhas
              relações e modos de existir de outro lugar — de dentro.
            </Body>
          </div>

          <div className="space-y-6 mb-12">
            <Body>
              Só mais tarde encontrei autoras que deram nome ao que eu vivia:{" "}
              <span className="font-semibold">Steph Jones, Devon Price, Jenara Nerenberg</span> e tantas outras mulheres
              autistas que vêm reconstruindo o olhar sobre o autismo em adultos.
            </Body>

            <Body>
              Steph, também psicóloga, passou anos buscando se consertar até perceber que o que havia não era falha, mas
              autismo mascarado e não reconhecido. Sua história me tocou profundamente, porque eu também buscava
              respostas dentro de um sistema clínico que nem sempre escuta quem sente diferente.
            </Body>

            <Quote className="my-6">"O que há de estranho em mim não é erro — é linguagem."</Quote>

            <Body>
              Durante muito tempo, os manuais e critérios da psicologia foram escritos a partir de um olhar masculino e
              neurotípico. Por isso, tantas mulheres cresceram mascarando, tentando caber em moldes que nunca foram
              feitos para elas. Até que o espelho se acalma — e o reflexo, enfim, se revela nítido:
            </Body>

            <Quote className="my-6">"Aqui está quem eu sempre fui."</Quote>

            <Body>
              A minha própria experiência — assombrosa e libertadora — de finalmente me reconhecer como uma pessoa
              autista e com TDAH, e não mais apenas como alguém dentro do chamado "espectro ampliado", me levou a
              repensar também minha prática clínica. Passei a buscar outros instrumentos de rastreio e avaliação,
              capazes de acolher as singularidades do autismo e do TDAH em pessoas — especialmente mulheres — com um
              funcionamento aparentemente exitoso, mas que vivem exaustas por sustentar o próprio mascaramento.
            </Body>

            <Body>
              O <span className="font-semibold">Espelho-d'Água</span> nasce desse encontro entre teoria e vida, entre o
              olhar clínico e o sentir cotidiano. Não é sobre consertar. É sobre compreender, honrar e encontrar beleza
              nas formas diferentes de existir.
            </Body>
          </div>

          <div className="grid md:grid-cols-3 items-stretch gap-6 md:gap-8 mb-8">
            {cards.map((card) => (
              <div
                key={card.title}
                onClick={() => openModal(card.title, card.content, card.materialId)}
                className="h-full cursor-pointer"
              >
                <IconCard icon={card.icon} title={card.title} description={card.description} />
              </div>
            ))}
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
