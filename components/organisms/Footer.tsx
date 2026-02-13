"use client"

import { useState } from "react"
import { Instagram, Mail, X, Bookmark } from "lucide-react"

export const Footer = () => {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const TermsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null

    return (
      <>
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={onClose}
        />
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl max-w-lg w-[90vw] max-h-[75vh] sm:max-h-[70vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in duration-300">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-primary-brown/10">
              <h2 className="text-lg sm:text-xl font-serif font-semibold text-primary-brown">Termos de Uso</h2>
              <button
                onClick={onClose}
                className="text-primary-brown hover:text-primary-orange transition-colors p-1"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 sm:py-5 text-xs sm:text-sm text-primary-brown/80 leading-relaxed space-y-3 sm:space-y-4 font-sans">
              <p>
                Scheilla Soares, pessoa jurídica de direito privado descreve, através deste documento, as regras de uso
                do site e qualquer outro site, loja ou aplicativo operado pelo proprietário.
              </p>
              <p>Ao navegar neste website, consideramos que você está de acordo com os Termos de Uso abaixo.</p>
              <p>
                Caso você não esteja de acordo com as condições deste contrato, pedimos que não faça mais uso deste
                website, muito menos cadastre-se ou envie os seus dados pessoais.
              </p>
              <p>
                Se modificarmos nossos Termos de Uso, publicaremos o novo texto neste website, com a data de revisão
                atualizada. Podemos alterar este documento a qualquer momento. Caso haja alteração significativa nos
                termos deste contrato, podemos informá-lo por meio das informações de contato que tivermos em nosso
                banco de dados ou por meio de notificações.
              </p>
              <p>
                A utilização deste website após as alterações significa que você aceitou os Termos de Uso revisados.
                Caso, após a leitura da versão revisada, você não esteja de acordo com seus termos, favor encerrar o seu
                acesso.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">Seção 1 – Usuário</h3>
              <p>
                A utilização deste website atribui de forma automática a condição de Usuário e implica a plena aceitação
                de todas as diretrizes e condições incluídas nestes Termos.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 2 – Adesão em conjunto com a Política de Privacidade
              </h3>
              <p>
                A utilização deste website acarreta a adesão aos presentes Termos de Uso e à versão mais atualizada da
                Política de Privacidade de Scheilla Soares.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 3 – Condições de acesso
              </h3>
              <p>
                Em geral, o acesso ao website de Scheilla Soares possui caráter gratuito e não exige prévia inscrição ou
                registro.
              </p>
              <p>
                Contudo, para usufruir de algumas funcionalidades, o usuário poderá precisar efetuar um cadastro,
                criando uma conta de usuário com login e senha próprios para acesso.
              </p>
              <p>
                É de total responsabilidade do usuário fornecer apenas informações corretas, autênticas, válidas,
                completas e atualizadas, bem como não divulgar o seu login e senha para terceiros.
              </p>
              <p>
                Partes deste website oferecem ao usuário a opção de publicar comentários em determinadas áreas. Scheilla
                Soares não consente com a publicação de conteúdos que tenham natureza discriminatória, ofensiva ou
                ilícita, ou ainda infrinjam direitos de autor ou quaisquer outros direitos de terceiros.
              </p>
              <p>
                A publicação de quaisquer conteúdos pelo usuário deste website, incluindo mensagens e comentários,
                implica em licença não-exclusiva, irrevogável e irretratável, para sua utilização, reprodução e
                publicação por Scheilla Soares no seu website, plataformas e aplicações de internet, ou ainda em outras
                plataformas, sem qualquer restrição ou limitação.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">Seção 4 – Cookies</h3>
              <p>
                Informações sobre o seu uso neste website podem ser coletadas a partir de cookies. Cookies são
                informações armazenadas diretamente no computador que você está utilizando. Os cookies permitem a coleta
                de informações tais como o tipo de navegador, o tempo despendido no website, as páginas visitadas, as
                preferências de idioma, e outros dados de tráfego anônimos.
              </p>
              <p>
                Nós e nossos prestadores de serviços utilizamos informações para proteção de segurança, para facilitar a
                navegação, exibir informações de modo mais eficiente, e personalizar sua experiência ao utilizar este
                website, assim como para rastreamento online. Também coletamos informações estatísticas sobre o uso do
                website para aprimoramento contínuo do nosso design e funcionalidade, para entender como o website é
                utilizado e para auxiliá-lo a solucionar questões relevantes.
              </p>
              <p>
                Caso não deseje uso de cookies, é possível bloqueá-los no navegador, ciente de que isso poderá limitar
                funcionalidades.
              </p>
              <p>
                As definições escolhidas podem afetar sua experiência de navegação e o funcionamento do website. Não nos
                responsabilizamos pelas consequências resultantes do funcionamento limitado deste website provocado pela
                desativação de cookies no seu dispositivo.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 5 – Propriedade Intelectual
              </h3>
              <p>
                Todos os elementos do website de Scheilla Soares são de propriedade intelectual da mesma ou de seus
                licenciados. Estes Termos não concedem qualquer licença ou direito de uso dos direitos de propriedade
                intelectual de Scheilla Soares ou de terceiros.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 6 – Links para sites de terceiros
              </h3>
              <p>
                Este website poderá conter links que redirecionam para sites de parceiros, anunciantes ou fornecedores.
                Cada site possui suas próprias práticas de privacidade e termos de uso.
              </p>
              <p>
                Recomendamos que o usuário consulte tais políticas antes de enviar quaisquer dados pessoais para esses
                sites.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 7 – Prazos e alterações
              </h3>
              <p>O funcionamento deste website se dá por prazo indeterminado.</p>
              <p>
                O website, no todo ou em partes, pode ser encerrado, suspenso ou interrompido unilateralmente por
                Scheilla Soares, a qualquer momento, sem necessidade de aviso prévio.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">Seção 8 – Dados pessoais</h3>
              <p>
                Durante a utilização deste website, certos dados pessoais serão coletados e tratados por Scheilla Soares
                e/ou por seus parceiros. As regras relacionadas ao tratamento desses dados estão estipuladas na Política
                de Privacidade.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">Seção 9 – Contato</h3>
              <p>Caso você tenha qualquer dúvida sobre os Termos de Uso, entre em contato pelo e-mail:</p>
              <a href="mailto:escutasetravessias@gmail.com" className="text-primary-orange hover:underline">
                escutasetravessias@gmail.com
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  const PrivacyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null

    return (
      <>
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={onClose}
        />
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-t-2xl sm:rounded-xl shadow-2xl max-w-lg w-[90vw] max-h-[75vh] sm:max-h-[70vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 sm:zoom-in duration-300">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-primary-brown/10">
              <h2 className="text-lg sm:text-xl font-serif font-semibold text-primary-brown">
                Política de Privacidade
              </h2>
              <button
                onClick={onClose}
                className="text-primary-brown hover:text-primary-orange transition-colors p-1"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 sm:py-5 text-xs sm:text-sm text-primary-brown/80 leading-relaxed space-y-3 sm:space-y-4 font-sans">
              <p>
                Scheilla Soares, pessoa jurídica de direito privado, leva a sua privacidade a sério e zela pela
                segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários do site e de
                qualquer outro ambiente digital operado pela proprietária.
              </p>
              <p>
                Esta Política de Privacidade destina-se a informá-lo sobre o modo como utilizamos e divulgamos
                informações coletadas em suas visitas ao nosso site e em mensagens que trocamos com você.
              </p>
              <p>Esta Política de Privacidade aplica-se somente às informações coletadas por meio deste site.</p>
              <p>
                Ao acessar a loja, enviar comunicações ou fornecer qualquer tipo de dado pessoal, você declara estar
                ciente e de acordo com os termos previstos nesta Política de Privacidade.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">Seção 1 – Definições</h3>
              <p>
                <strong>"Dados Pessoais":</strong> significa qualquer informação que identifique ou possa identificar
                uma pessoa natural, como nome, CPF, data de nascimento, endereço IP, entre outros.
              </p>
              <p>
                <strong>"Dados Pessoais Sensíveis":</strong> significa qualquer informação que revele origem racial,
                convicção religiosa, opinião política, filiação a sindicato, dado referente à saúde ou vida sexual, dado
                genético ou biométrico.
              </p>
              <p>
                <strong>"Tratamento de Dados":</strong> significa qualquer operação realizada com Dados Pessoais, como
                coleta, armazenamento, organização, consulta, uso, divulgação, eliminação ou qualquer outra prevista em
                lei.
              </p>
              <p>
                <strong>"Leis de Proteção de Dados":</strong> abrange todas as normas aplicáveis, incluindo a Lei Geral
                de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/18).
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 2 – Uso de Dados Pessoais
              </h3>
              <p>
                Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo,
                personalizando e aprimorando sua experiência. Exemplos:
              </p>
              <p>
                – Viabilizar contato entre você e Scheilla Soares.
                <br />– Confirmar ou corrigir informações recebidas.
                <br />– Enviar conteúdos ou informações de interesse.
                <br />– Personalizar sua experiência no site.
                <br />– Entrar em contato por e-mail, telefone, SMS ou outras formas de comunicação.
              </p>
              <p>
                Dados Pessoais também podem ser utilizados:
                <br />
                (a) conforme permitido pelas Leis de Proteção de Dados;
                <br />
                (b) para atender exigências legais;
                <br />
                (c) cumprir decisões judiciais;
                <br />
                (d) proteger nossas operações;
                <br />
                (e) proteger direitos e segurança;
                <br />
                (f) prevenir fraude;
                <br />
                (g) limitar danos;
                <br />
                (h) outros usos permitidos por lei.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 3 – Não fornecimento de Dados Pessoais
              </h3>
              <p>
                O fornecimento de Dados Pessoais não é obrigatório. Entretanto, sem determinadas informações, pode não
                ser possível oferecer funcionalidades, atendimento ou respostas adequadas.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">Seção 4 – Dados coletados</h3>
              <p>
                O público pode navegar no site sem cadastro. Contudo, algumas funcionalidades dependem do envio de
                dados. Podemos coletar:
              </p>
              <p>
                <strong>Dados fornecidos voluntariamente:</strong>
                <br />
                nome, sobrenome, telefone, endereço, cidade, estado, e-mail, informações enviadas nos formulários.
              </p>
              <p>
                <strong>Dados coletados automaticamente:</strong>
                <br />
                localização aproximada, endereço IP, dispositivo, navegador, páginas visitadas, tempo de navegação,
                origem do acesso, preferências, entre outros.
              </p>
              <p>
                <strong>Ferramentas utilizadas:</strong>
                <br />
                Cookies, Web Beacons e Pixel Tags (mesmo que alguns não estejam habilitados no momento, a política
                contempla o uso futuro).
              </p>
              <p>Não coletamos Dados Sensíveis.</p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 5 – Compartilhamento de Dados Pessoais
              </h3>
              <p>Podemos compartilhar seus dados com:</p>
              <p>
                – Empresas parceiras selecionadas por você
                <br />– Prestadores de serviços (armazenamento, hospedagem, e-mail, TI etc.)
                <br />– Serviços responsáveis por funcionalidades ou atendimento
                <br />– Terceiros em reorganizações societárias
                <br />– Autoridades, quando exigido por lei
              </p>
              <p>Não vendemos dados pessoais.</p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 6 – Transferências internacionais de dados
              </h3>
              <p>
                Os dados coletados podem ser armazenados ou acessados por servidores localizados fora do Brasil, sempre
                em conformidade com a LGPD.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 7 – Coleta automática de Dados Pessoais
              </h3>
              <p>
                O site pode armazenar ou recuperar informações por meio de cookies e tecnologias semelhantes. Esses
                dados ajudam a melhorar funcionalidades, segurança, desempenho e experiência do usuário.
              </p>
              <p>
                Ferramentas utilizadas podem incluir:
                <br />– coleta via navegador ou dispositivo
                <br />– uso de cookies
                <br />– uso de pixel tags ou web beacons
              </p>
              <p>
                Caso não deseje uso de cookies, é possível bloqueá-los no navegador, ciente de que isso poderá limitar
                funcionalidades.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 8 – Categorias de cookies
              </h3>
              <p>
                <strong>Estritamente necessários:</strong> essenciais para o funcionamento básico do site.
                <br />
                <strong>Desempenho:</strong> coletam dados anônimos para métricas e melhorias.
                <br />
                <strong>Funcionalidade:</strong> lembram preferências e aprimoram navegação.
                <br />
                <strong>Publicidade:</strong> direcionam anúncios conforme comportamento de navegação.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 9 – Direitos do Usuário
              </h3>
              <p>
                Você pode solicitar:
                <br />– confirmação de tratamento
                <br />– acesso aos dados
                <br />– correção
                <br />– anonimização, bloqueio ou eliminação
                <br />– portabilidade
                <br />– informações sobre compartilhamento
                <br />– explicação sobre consentimento
                <br />– revogação do consentimento
              </p>
              <p>Para segurança, poderá ser necessária verificação de identidade.</p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 10 – Segurança dos Dados Pessoais
              </h3>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas. Porém, nenhum sistema é 100% seguro. Caso
                suspeite de qualquer comprometimento, entre em contato imediatamente.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 11 – Links para terceiros
              </h3>
              <p>
                O site pode conter links externos. Cada site possui sua própria política de privacidade. Recomendamos
                leitura antes de fornecer dados pessoais.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 12 – Atualizações desta Política de Privacidade
              </h3>
              <p>
                Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível no site.
                O uso continuado indica concordância com as alterações.
              </p>

              <h3 className="font-semibold text-primary-brown text-sm sm:text-base pt-2">
                Seção 13 – Encarregado pelo Tratamento de Dados (DPO)
              </h3>
              <p>Para dúvidas ou solicitações sobre dados pessoais, contate:</p>
              <a href="mailto:escutasetravessias@gmail.com" className="text-primary-orange hover:underline">
                escutasetravessias@gmail.com
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <footer className="bg-neutral-taupe border-t border-primary-brown/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <h3 className="text-lg md:text-xl font-serif font-semibold text-primary-brown mb-4">
              Escutas e Travessias
            </h3>
            <p className="text-sm text-primary-brown/90 mb-4">Psicologia e neurodiversidade</p>
            <div className="space-y-3">
              <a
                href="mailto:escutasetravessias@gmail.com"
                className="flex items-center gap-2 text-sm text-primary-brown hover:text-primary-orange transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>escutasetravessias@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="animate-fade-in-up" style={{ animationDelay: "50ms" }}>
            <h4 className="text-base md:text-lg font-serif font-semibold text-primary-brown mb-4">Páginas</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", id: "hero" },
                { label: "Serviços", id: "correnteza" },
                { label: "Sobre", id: "intro" },
                { label: "Contato", id: "contato" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-primary-brown hover:text-primary-orange hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h4 className="text-base md:text-lg font-serif font-semibold text-primary-brown mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setOpenModal("Termos de Uso")}
                  className="text-sm text-primary-brown hover:text-primary-orange hover:translate-x-1 transition-all duration-200"
                >
                  Termos de uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("Política de Privacidade")}
                  className="text-sm text-primary-brown hover:text-primary-orange hover:translate-x-1 transition-all duration-200"
                >
                  Política de privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <h4 className="text-base md:text-lg font-serif font-semibold text-primary-brown mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/escutasetravessias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-brown/20 flex items-center justify-center text-primary-brown hover:bg-primary-orange hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:escutasetravessias@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-brown/20 flex items-center justify-center text-primary-brown hover:bg-primary-orange hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/@scheillasoares"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-brown/20 flex items-center justify-center text-primary-brown hover:bg-primary-orange hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Medium"
                title="Medium"
              >
                <span className="text-lg font-black leading-none font-serif">M</span>
              </a>
              <a
                href="https://escutasetravessia.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-brown/20 flex items-center justify-center text-primary-brown hover:bg-primary-orange hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label="Substack"
                title="Substack"
              >
                <Bookmark className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-brown/20 pt-6 md:pt-8 text-center space-y-2 animate-fade-in-up">
          <p className="text-sm md:text-base text-primary-brown/80">
            Scheilla Soares - CRP 12/01849 - Psicologia e neurodiversidade
          </p>
          <p className="text-xs text-primary-brown/90">
            © {new Date().getFullYear()} Escutas e Travessias. Todos os direitos reservados.
          </p>
        </div>
      </div>

      <TermsModal isOpen={openModal === "Termos de Uso"} onClose={() => setOpenModal(null)} />
      <PrivacyModal isOpen={openModal === "Política de Privacidade"} onClose={() => setOpenModal(null)} />
    </footer>
  )
}
