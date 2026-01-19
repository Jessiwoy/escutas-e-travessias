"use client"

import Image from "next/image"
import { H2, Subtitle, Body } from "@/components/atoms/Typography"

export const NascenteEMarSection = () => {
  return (
    <section id="nascente" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <H2 className="mb-4">Entre a nascente e o mar</H2>
          <Subtitle>O encontro das águas que me ensinaram a escutar</Subtitle>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-start items-start mb-8">
          {/* Adjusted image height on tablet (md:h-[400px]) to better match text column height 
              without aspect-ratio conflict. Desktop lg: uses aspect-[4/3] with h-auto */}
          <div className="relative h-[300px] md:h-[400px] lg:h-auto lg:aspect-[4/3] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/images/9-nascente-e-o-mar.png"
              alt="Praia ao entardecer com a nascente e o mar"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4 order-1 md:order-2 flex flex-col justify-start">
            <Body>
              Aprendi cedo que a vida é feita de fragilidades e belezas entrelaçadas. Na infância, convivi com uma
              menina cuja breve passagem me ensinou o valor de cada gesto e a profundidade do cuidado. Foi ali que
              nasceu minha escuta — essa forma de estar com o outro que me acompanha desde então.
            </Body>

            <Body>
              A deficiência esteve presente na minha família não como ausência, mas como convite: um chamado para
              compreender o humano em suas múltiplas formas de existir. Esse encontro precoce com o que foge ao padrão
              me levou à <span className="font-semibold">Educação Especial</span>, e foi através dela que encontrei a{" "}
              <span className="font-semibold">Psicologia</span>.
            </Body>

            <Body>
              A Psicologia foi o território onde pude{" "}
              <span className="font-semibold">expandir minha ânsia por compreender o mundo e a mim mesma</span> — onde o
              cuidado encontrou forma, palavra e sentido. Durante décadas, caminhei entre escolas, consultórios e
              instituições, tentando conciliar ciência, ética e sensibilidade.
            </Body>
          </div>
        </div>

        <div className="space-y-4">
          <Body>
            Quando me tornei <span className="font-semibold">mãe atípica</span>, já atuava há muitos anos. Mas essa
            experiência virou tudo do avesso: fui convidada a rever o que sabia, a silenciar o "mestre" que acredita
            conhecer e a aprender, nas próprias carnes, o que é viver a experiência da{" "}
            <span className="font-semibold">neurodiversidade</span>. Desde então, minha escuta se transformou — deixou
            de partir do saber para partir do encontro.
          </Body>

          <Body>
            Hoje, não existe mais em mim separação de papéis. A neurodiversidade me constitui{" "}
            <span className="font-semibold">por dentro e por fora</span> — molda o meu modo de pensar, sentir e cuidar.
            Durante muito tempo, tentei me encaixar num modelo de psicologia considerado o "correto". Foram anos
            tentando caber em moldes teóricos e clínicos que não me refletiam. Hoje, celebro o que antes me parecia
            inadequado: a diferença que um dia me afastou tornou-se o centro da minha coerência. A neurodiversidade
            deixou de ser um transtorno também no campo profissional — e se tornou a minha identidade, o meu modo de
            compreender e de cuidar.
          </Body>

          <Body>
            O <span className="font-semibold">Escutas e Travessias</span> nasceu desse lugar — entre o saber e o sentir,
            entre o cotidiano e o simbólico, entre a psicologia e a neurodiversidade. É um espaço que acolhe as margens
            do humano, onde cada pessoa pode respirar, se reconhecer e criar caminhos de sentido a partir da própria
            forma de ser.
          </Body>
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
  )
}
