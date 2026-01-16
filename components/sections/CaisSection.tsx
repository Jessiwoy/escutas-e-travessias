"use client"

import { useState } from "react"
import { H2, Subtitle, Body } from "@/components/atoms/Typography"
import { ContentModal } from "@/components/organisms/ContentModal"

export const CaisSection = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", content: "", materialId: "" })

  const timeline = [
    {
      number: "1",
      title: "O Diagnóstico",
      description: "Quando o mundo se reorganiza",
      materialId: "cais_1", // Adicionado materialId
      content: `O Diagnóstico — Quando o mundo se reorganiza

O instante em que o chão se move. Entre o alívio e o susto, nasce o desafio de reaprender a amar, esperar e acreditar. Esta travessia fala sobre o luto e a transformação silenciosa que o acompanha.

Acesse o material de apoio e siga no seu tempo`,
    },
    {
      number: "2",
      title: "A Busca",
      description: "Terapias, escolas, informação",
      materialId: "cais_2", // Adicionado materialId
      content: `A Busca — Terapias, escolas, informação

Quando o amor vira investigação. É o tempo de procurar respostas, ouvir opiniões e lidar com o excesso. Esta travessia oferece bússolas para navegar entre vozes e reencontrar a própria intuição.

Acesse o material de apoio e siga no seu tempo`,
    },
    {
      number: "3",
      title: "O Esgotamento",
      description: "Quando o corpo pede pausa",
      materialId: "cais_3", // Adicionado materialId
      content: `O Esgotamento — Quando o corpo pede pausa

Entre consultas, relatórios e urgências, o corpo começa a falar — primeiro sussurra, depois grita. Esta travessia é um convite ao descanso possível, à pausa que sustenta e ao gesto mínimo que recomeça.

Acesse o material de apoio e siga no seu tempo`,
    },
    {
      number: "4",
      title: "O Recomeço",
      description: "Aprendendo a cuidar também de si",
      materialId: "cais_4", // Adicionado materialId
      content: `O Recomeço — Aprendendo a cuidar também de si

Depois de tantas renúncias, surge o desejo de retorno: à mulher, à pessoa, à vida. Esta travessia fala sobre reencantar-se com o cotidiano e lembrar que ainda é possível florescer.

Acesse o material de apoio e siga no seu tempo`,
    },
  ]

  const openModal = (title: string, content: string, materialId: string) => {
    setModalContent({ title, content, materialId })
    setModalOpen(true)
  }

  return (
    <>
      <section id="cais" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <H2 className="mb-4">O Cais</H2>
            <Subtitle>Um espaço de pausa, afeto e reconstrução</Subtitle>
          </div>

          <div className="space-y-6 mb-12">
            <Body>
              O Cais é o lugar onde as mães podem, enfim, respirar. Depois das tempestades, dos diagnósticos e das
              longas madrugadas, há aqui um espaço de descanso e escuta — um refúgio para quem carrega o amor e o
              cansaço no mesmo corpo. Ser mãe atípica é viver entre o cuidado e o esquecimento de si. Cada história é
              única, mas há caminhos que se reconhecem de longe — curvas, pausas e reencontros que atravessam muitas de
              nós.
            </Body>

            <Body>
              As <span className="font-semibold">Travessias para Mães Atípicas</span> nasceram do meu próprio percurso
              como mãe, psicóloga e pedagoga. São <span className="font-semibold">materiais de apoio gratuitos,</span>{" "}
              criados para sustentar quem vive processos de descoberta, esgotamento e reconstrução. Cada travessia é um
              porto, e você escolhe por onde começar.
            </Body>

            <p className="text-sm text-primary-brown mb-6">
              Cada travessia abre um pequeno porto — um texto, um guia ou um diário para acompanhar os processos de
              autocompreensão e cuidado. Você pode ler, refletir, escrever — e seguir no seu ritmo.
            </p>

            <div className="bg-primary-gold/10 rounded-lg p-4 border-l-4 border-primary-gold">
              <p className="text-sm italic text-primary-brown">
                Ao final de cada material, há um convite discreto para quem desejar seguir mais fundo — um espaço de
                continuação e escuta individual, disponível se e quando fizer sentido pra você.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(item.title, item.content, item.materialId)}
                className="text-center cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <button className="w-16 h-16 rounded-full bg-primary-orange text-white font-semibold text-lg hover:bg-primary-brown hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                    {item.number}
                  </button>
                </div>
                <h3 className="text-lg font-serif font-semibold text-primary-brown mb-2 group-hover:text-primary-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-primary-brown/80 mb-2">{item.description}</p>
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
