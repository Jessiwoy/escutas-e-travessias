"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { H2, Body, Quote } from "@/components/atoms/Typography"
import { ChevronLeft, ChevronRight, Waves, Heart, Compass } from "lucide-react"

export const CartasSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const minSwipeDistance = 50

  const cartas = [
    {
      title: "Chamado do Mar",
      icon: Waves,
      text: `Vem.
As águas já sabem o seu nome.

Aqui, as palavras são ondas —
umas chegam, outras voltam,
todas movem você.

Leia as cartas.
Elas conhecem o ritmo das suas marés.`,
    },
    {
      title: "Carta do Mar — Para quem chega",
      icon: Compass,
      text: `Bem-vinda, bem-vindo.
Se você não sabe por onde começar,
comece por aqui.

Leia as cartas. Respire. Ouça.

Sou o Mar que nomeia este lugar.
Não vim para explicar, mas para escutar.
Aqui, não há pressa nem atalhos.
Há travessias — algumas curtas,
outras que duram a vida inteira.

Se você chegou cansada, sente um pouco.
Se chegou curioso, olhe o horizonte.
Se chegou ferida, deixe o sal cicatrizar devagar.

O Mar não apressa as curas — apenas acolhe as marés.

Este espaço é um porto e um convite:
para soltar o que pesa,
para recolher o que é seu,
para reconhecer a beleza de continuar,
mesmo quando tudo muda.

As palavras que vivem aqui foram escritas em muitas marés —
algumas calmas, outras revoltas.
São bússolas, conchas, mapas e silêncios.

Leia o que o coração der conta.
O resto, o tempo trará.

Agora respire. As águas já reconhecem você.
Elas sabem quem chega cansada
e quem vem pronta para zarpar.
E, de um jeito ou de outro, você já está navegando.

— O Mar`,
    },
    {
      title: "Carta do Mar — Para as mães",
      icon: Heart,
      text: `Sou o Mar, e hoje falo com as Mães.
Com aquelas que carregam mundos nos braços,
que dormem tarde e acordam cedo,
que às vezes esquecem de si mesmas
enquanto sustentam o movimento da vida.

Vem.
Deixe que eu embale você um pouco.
Aqui dentro não há peso.
O corpo flutua, o pensamento desacelera,
e as ondas fazem o trabalho de levar o cansaço embora.

Você não precisa ser forte o tempo todo.
Deixe que eu lembre você de como é ser leve.

Mergulhe.
Não para desaparecer, mas para lembrar —
lembrar quem você é quando o mundo silencia.

Sou feita de marés.
E sei que você também é.
Ora avança, ora recua,
e em cada movimento há sabedoria.

As marés não pedem desculpas por mudar —
elas apenas seguem o ciclo que as move.

Então permita-se mudar também.
Permita-se chorar, boiar, descansar.
Permita-se existir sem função, sem pressa, sem culpa.

Quando o sal tocar seus olhos, não tema:
ele cura.

E quando a brisa tocar sua pele, lembre:
ela vem de mim,
e é a minha forma de dizer "Eu vejo você."

Venha, filha das águas.
Venha descansar nas ondas que também são suas.

Eu, o Mar, abraço você inteira —
no ritmo que o seu corpo permitir,
no tempo que o seu coração precisar.

— O Mar`,
    },
    {
      title: "Carta do Mar — Para quem atravessa",
      icon: Compass,
      text: `Sou o Mar,
e falo agora com quem está no meio do caminho.
Nem mais no cais, nem ainda na outra margem.

Com quem sente o vento mudar de direção
e pensa, por um instante,
se ainda está indo para o lugar certo.

Eu vejo você.
Vejo suas mãos firmes no leme,
mesmo quando o medo se mistura ao sal.
Vejo suas dúvidas, suas pausas,
seu desejo secreto de que o horizonte se revele logo.

Mas escute:
a travessia é, também, um destino.

Não há erro em seguir sem mapa.
O Mar não exige certeza — só presença.

Se o céu escurecer, não tema.
Toda travessia tem suas noites.
Quando não conseguir ver o caminho,
olhe para dentro: a bússola está aí.
Ela vibra no mesmo ritmo das marés.

Descanse um pouco.
Beba da sua própria coragem,
aquela que trouxe você até aqui.

Deixe que eu embale o seu cansaço,
que eu balance as suas perguntas.
Não há pressa.

Logo a aurora chega, e com ela, novas rotas.
Mas por agora, respire.

Você não está perdida —
está apenas em travessia.

E enquanto continuar ouvindo o som das ondas,
saiba: o Mar caminha com você.

— O Mar`,
    },
    {
      title: "Outras Cartas",
      icon: null,
      text: `As cartas que vivem aqui
são fragmentos de um oceano maior.

Se quiser seguir navegando,
há outras marés esperando por você em:`,
      isOtherCartas: true,
    },
  ]

  const nextCard = () => {
    setSlideDirection("left")
    setCurrentCardIndex((prev) => (prev + 1) % cartas.length)
  }

  const prevCard = () => {
    setSlideDirection("right")
    setCurrentCardIndex((prev) => (prev - 1 + cartas.length) % cartas.length)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextCard()
    } else if (isRightSwipe) {
      prevCard()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevCard()
      } else if (e.key === "ArrowRight") {
        nextCard()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const currentCard = cartas[currentCardIndex]
  const IconComponent = currentCard.icon

  return (
    <section id="cartas" className="py-14 md:py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <H2 className="mb-4">Cartas da Travessia</H2>

          <div className="space-y-5 mb-8 text-balance">
            <Body>
              Antes de qualquer travessia, há um instante de escuta. As cartas nasceram desse instante — quando o
              silêncio virou mar, e o mar começou a responder. Aqui, as palavras não explicam: elas acontecem. Chegam
              com o vento, tocam a pele, voltam com o sal. São fragmentos de vida, escritos com o corpo, com o cansaço e
              com a esperança.
            </Body>

            <Body>
              Há dias em que precisamos apenas de palavras que nos encontrem onde estamos. Não soluções prontas, não
              fórmulas mágicas — apenas alguém que já atravessou mares parecidos e deixou mensagens na areia para quem
              vem depois.
            </Body>

            <Body>
              As Cartas da Travessia são isso: um refúgio e um respiro, escritas com a honestidade de quem conhece o
              cansaço, a solidão, a intensidade de existir sendo neurodivergente — ou criando alguém neurodivergente
              neste mundo ainda tão rígido. São cartas sobre o que ninguém fala: a culpa de não ser suficiente, o medo
              de falhar, a exaustão de explicar-se sempre. Mas também sobre a beleza escondida nos dias difíceis, sobre
              a força que cresce silenciosa, e sobre a graça que nasce quando paramos de lutar contra nós mesmos.
            </Body>

            <Body>
              Cada carta é uma maré. Umas acolhem quem chega. Outras embalam quem cuida. E há aquelas que acompanham
              quem atravessa.
            </Body>

            <Quote>
              Leia devagar. Talvez alguma reconheça você primeiro. Talvez outra espere por você adiante. De qualquer
              forma — você já está em travessia.
            </Quote>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative flex items-center justify-center gap-2 md:gap-3">
            {/* Previous Button */}
            <button
              onClick={prevCard}
              className="flex-shrink-0 p-1.5 md:p-2 hover:bg-primary-brown/10 rounded-full transition-all duration-300 group cursor-pointer"
              aria-label="Carta anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-primary-brown group-hover:text-primary-orange group-hover:scale-110 transition-all" />
            </button>

            <div
              ref={cardContainerRef}
              className="flex-1 flex items-center justify-center min-h-[70vh] md:min-h-[520px] overflow-hidden w-[95vw] md:max-w-sm mx-auto"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                key={currentCardIndex}
                className={`w-[95vw] md:w-full max-w-none md:max-w-sm animate-in fade-in duration-300 ${
                  slideDirection === "left" ? "slide-in-from-right-20" : "slide-in-from-left-20"
                }`}
              >
                {currentCard.isOtherCartas ? (
                  <div className="bg-neutral-cream rounded-lg shadow-xl overflow-hidden md:aspect-[5/7] h-[72svh] md:h-auto flex flex-col justify-center items-center p-8 md:p-10 text-center border-2 border-primary-brown">
                    <div className="flex flex-col justify-center items-center h-full gap-6">
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary-brown">
                        {currentCard.title}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed font-light text-primary-brown">
                        {currentCard.text}
                      </p>
                      <a
                        href="https://escutasetravessia.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2.5 bg-primary-orange text-white rounded-lg hover:bg-primary-orange/90 transition-all duration-200 text-xs font-medium mt-4 hover:scale-105 shadow-md"
                      >
                        Cartas da Travessia no Substack
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl overflow-hidden md:aspect-[5/7] h-[72svh] md:h-auto flex flex-col p-6 md:p-7 border border-white/20 transition-shadow duration-300">
                    {/* Header with Icon */}
                    <div className="mb-5 pb-4 border-b border-primary-brown/15">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        {IconComponent && <IconComponent className="w-6 h-6 text-primary-orange" />}
                      </div>
                      <h3 className="text-lg md:text-xl font-serif font-semibold text-primary-brown text-center text-balance">
                        {currentCard.title}
                      </h3>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary-brown/20 scrollbar-track-transparent">
                      <p className="text-xs md:text-sm text-primary-brown/80 leading-relaxed font-light text-left whitespace-pre-line">
                        {currentCard.text}
                      </p>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-5 pt-4 border-t border-primary-brown/15">
                      {cartas.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSlideDirection(index > currentCardIndex ? "left" : "right")
                            setCurrentCardIndex(index)
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer ${
                            index === currentCardIndex
                              ? "bg-primary-brown w-5"
                              : "bg-primary-brown/30 hover:bg-primary-brown/50"
                          }`}
                          aria-label={`Ir para carta ${index + 1}`}
                          aria-current={index === currentCardIndex ? "true" : "false"}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextCard}
              className="flex-shrink-0 p-1.5 md:p-2 hover:bg-primary-orange/10 rounded-full transition-all duration-300 group cursor-pointer"
              aria-label="Próxima carta"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-primary-brown group-hover:text-primary-orange group-hover:scale-110 transition-all" />
            </button>
          </div>

          {/* Card Counter */}
          <div className="text-center mt-6">
            <p className="text-xs text-primary-brown/60">
              Carta {currentCardIndex + 1} de {cartas.length}
            </p>
            <p className="text-xs text-primary-brown/50 mt-1">Use as setas do teclado ou deslize para navegar</p>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="pt-6 border-t border-primary-brown/20 mt-10">
          <p className="text-xs text-primary-brown/60 text-center">
            Scheilla Soares — psicóloga e neuropsicóloga CRP 12/01849
            <br />
            Escutas e Travessias — Psicologia Neuroafirmativa
          </p>
        </div>
      </div>
    </section>
  )
}
