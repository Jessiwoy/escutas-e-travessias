"use client"

import Image from "next/image"
import { H1, Subtitle, Quote, Body } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"

export const IntroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("enseada")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="intro" className="py-12 md:py-24 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up flex flex-col">
            <div>
              <H1>Escutas e Travessias</H1>
              <Subtitle className="mt-3 md:mt-4">um lugar para respirar, pertencer e existir com beleza</Subtitle>
            </div>

            <Quote>"Há caminhos que não começam com passos, mas com silêncio."</Quote>

            <div className="relative h-[300px] sm:h-[400px] md:hidden rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/images/1-escutas-e-travessias.png"
                alt="Praia ao pôr do sol com areia rosa e água turquesa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-4">
              <Body>
                O <span className="font-semibold">Escutas e Travessias</span> nasceu de um instante de consciência sobre
                o tempo — da necessidade de dar forma ao essencial antes que o depois chegasse. Sou{" "}
                <span className="font-semibold">Scheilla Soares, psicóloga e neuropsicóloga.</span> Minha forma de
                compreender o mundo é <span className="font-semibold">neurodivergente</span> — e é dela que nasce a
                psicologia que pratico. Escuto com o corpo, com a experiência e com a alma de quem vive as travessias
                que acolhe.
              </Body>

              <Body>
                Depois de mais de três décadas na Psicologia e na Educação, e quase o mesmo tempo na maternidade
                atípica, percebi que minha trajetória não cabia apenas nos papéis profissionais. Durante anos, olhei
                para fora — para meus filhos, alunos e pacientes — até reconhecer que também fazia parte do universo que
                eu cuidava. Assumir minha neurodivergência foi o ponto de virada: deixei de me ver como alguém "com
                traços" para compreender essas formas de ser como parte intrínseca de mim. Essa revelação me conduziu da
                observação à vivência, da teoria à identidade.
              </Body>

              <Body>
                O <span className="font-semibold">Escutas e Travessias</span> é, assim, uma resposta à vida — um modo de
                entrelaçar{" "}
                <span className="font-semibold">Psicologia, Neurodiversidade, experiência e beleza possível.</span> Um
                convite para respirar, pausar e reconhecer a singularidade de cada forma de existir. Aqui há{" "}
                <span className="font-semibold">
                  enseadas que acolhem, espelhos que refletem sem julgamento, cais que oferecem descanso e praias onde a
                  curiosidade brinca livremente.
                </span>{" "}
                Cada uma dessas margens é uma possibilidade de escuta, encontro e transformação.
              </Body>

              <Body>Você pode chegar devagar. Não há pressa.</Body>
            </div>

            <Button onClick={scrollToNext}>Comece sua jornada</Button>

            <div className="pt-6 border-t border-primary-brown/20">
              <p className="text-xs text-primary-brown/60">
                Scheilla Soares — psicóloga e neuropsicóloga CRP 12/01849
                <br />
                Escutas e Travessias — Psicologia Neuroafirmativa
              </p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 hidden md:block">
            <Image
              src="/images/1-escutas-e-travessias.png"
              alt="Praia ao pôr do sol com areia rosa e água turquesa"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
