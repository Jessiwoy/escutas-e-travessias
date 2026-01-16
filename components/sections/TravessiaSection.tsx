import Image from "next/image"
import { H2, Body } from "@/components/atoms/Typography"
import { Instagram, Mail, FileText } from "lucide-react"

export const TravessiaSection = () => {
  return (
    <section id="convite" className="py-16 md:py-24 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
          <div className="relative h-[300px] md:h-full md:min-h-[550px] rounded-lg overflow-hidden shadow-lg order-1 md:order-1">
            <Image
              src="/images/travessia-farol.png"
              alt="Farol iluminado em uma colina com caminho de pedras"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6 flex flex-col justify-start order-2 md:order-2">
            <div>
              <H2>Convite</H2>
              <p className="text-lg text-primary-orange font-serif italic mt-4">A travessia é sua</p>
            </div>

            <div className="bg-primary-orange/10 rounded-lg p-6 border-l-4 border-primary-orange mb-6">
              <p className="text-sm font-semibold text-primary-brown">
                Eu apenas devolvo o que a vida me ensinou ao me despir de tudo que eu achava que sabia
              </p>
            </div>

            <Body>
              Este espaço existe para que você possa voltar sempre que precisar: para respirar, reconhecer-se, descansar
              ou simplesmente lembrar que há outros navegando também.
            </Body>

            <Body>
              Aqui, a <span className="font-semibold">neurodiversidade</span> é reconhecida como riqueza, não como
              desvio. E o <span className="font-semibold">cuidado</span> é um ato de amor que inclui a si mesmo.
            </Body>

            <Body>
              Se estas palavras tocaram algo em você, se alguma carta futura puder iluminar um dia difícil — então este
              trabalho já cumpriu o seu propósito.
            </Body>

            <Body>
              Porque a beleza não está em transformar ninguém, mas em criar espaços onde cada pessoa possa florescer, no
              seu próprio ritmo e à sua própria maneira.
            </Body>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <Body>
            Chegamos ao fim desta apresentação, mas a jornada continua. Cada enseada, cada espelho, cada cais e cada
            praia seguem aqui — esperando por você, sem pressa, sem julgamento.
          </Body>

          <Body>
            <span className="font-semibold">Escutas e Travessias</span> nasceu do que aprendi quando a vida me
            desmontou. Foram anos de estudos, formações, terapias e buscas — mas nada me transformou tanto quanto a
            maternidade atípica. Cuidar de alguém full time me obrigou a olhar para mim mesma com radicalidade, a
            reconhecer os limites do que eu sabia, e a reaprender tudo — o corpo, o tempo, a fé, o cansaço, o amor.
          </Body>

          <Body>
            Foi ali que descobri que o verdadeiro conhecimento não vem apenas do estudo, mas do que somos forçados a
            desaprender para continuar. A <span className="font-semibold">neurodiversidade,</span> que antes eu tentava
            compreender de fora, revelou-se como a própria linguagem da minha vida.
          </Body>

          <Body>
            O que compartilho aqui não é método nem doutrina — é testemunho. São fragmentos do que aprendi em cada
            porto, os faróis que me ajudaram a atravessar noites sem mapa, os gestos e saberes que encontrei e que,
            agora, devolvo ao mar.
          </Body>

          <Body>
            Cada palavra, cada carta, cada material é parte dessa devolução — um modo de agradecer à vida por tudo o
            que, um dia, me sustentou.
          </Body>
        </div>

        <div className="pt-6 border-t border-primary-brown/20">
          <p className="text-sm font-serif font-semibold text-primary-brown mb-2">Scheilla Soares</p>
          <p className="text-xs italic text-primary-brown/70 mb-6">
            psicologia, neurodiversidade e maternidade atípica
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://instagram.com/escutasetravessias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-orange text-white rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://escutasetravessia.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary-brown text-white rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <FileText className="w-5 h-5" />
              <span>Substack</span>
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 px-4 py-2 bg-neutral-taupe text-primary-brown rounded-lg hover:bg-primary-brown hover:text-white transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Contato</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
