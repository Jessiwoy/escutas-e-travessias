# Escutas e Travessias

Site institucional de Scheilla Soares — psicóloga e mãe atípica (CRP 12/01849). Um espaço digital que une ciência e sensibilidade para acolher adultos neurodivergentes em suas travessias pessoais.

## Sobre o Projeto

Este é um site one-page com navegação suave entre seções, sistema de captura de leads via EmailJS, formulário de contato funcional, e design responsivo otimizado para mobile, tablet e desktop.

### Tecnologias

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Componentes UI:** shadcn/ui (customizados)
- **E-mail:** EmailJS (client-side)
- **Ícones:** Lucide React
- **Animações:** CSS Transitions + Intersection Observer

## Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout principal com metadata SEO
│   ├── page.tsx             # Página principal com todas as sections
│   └── globals.css          # Estilos globais e design tokens
├── components/
│   ├── atoms/               # Componentes básicos (Typography, Button, WaveDivider)
│   ├── molecules/           # Componentes compostos (IconCard, DownloadButton)
│   ├── organisms/           # Componentes complexos (Navbar, Footer, ContentModal)
│   ├── sections/            # Seções da página (Hero, Intro, Cartas, etc.)
│   ├── cookies/             # Sistema de consentimento de cookies
│   └── ui/                  # Componentes shadcn/ui utilizados
├── constants/
│   └── materialsCatalog.ts  # Catálogo de materiais para download
├── hooks/
│   ├── use-toast.ts         # Hook para notificações toast
│   ├── use-mobile.ts        # Detecção de dispositivo mobile
│   ├── useCookieConsent.ts  # Gerenciamento de consentimento
│   ├── useIntersectionObserver.ts # Animações on-scroll
│   └── useScrollSpy.ts      # Navegação ativa por scroll
├── lib/
│   ├── emailService.ts      # Serviço de envio de e-mails (EmailJS)
│   ├── formatPhone.ts       # Formatação de telefone BR
│   └── utils.ts             # Utilitários (cn function)
└── public/
    └── images/              # Imagens do projeto
```

## Seções do Site

1. **Hero** - Apresentação inicial com imagem de fundo
2. **Intro** - Introdução "Escutas e Travessias"
3. **A Enseada** - Práticas de presença (3 materiais para download) 
4. **O Espelho-d'Água** - Neurodivergência em mulheres (3 materiais)  
5. **Correnteza** - Avaliação neurofuncional e mentorias (com pills animadas) 
6. **O Cais** - Relatos de travessia (4 materiais) 
7. **A Praia** - Linhas editoriais (2 materiais)
8. **Cartas** - Carrossel com duas cartas (Lógicas e Subjetividade) 
9. **Nascente e o Mar** - Sobre Scheilla Soares
10. **Convite** - Citação de encerramento
11. **Contato** - Formulário funcional via EmailJS

## Instalação

### Pré-requisitos

- Node.js >= 20.9.0
- pnpm >= 9.12.3

### Setup

```bash
# Clonar repositório
git clone <repo-url>
cd escutas-e-travessias

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas credenciais EmailJS

# Iniciar servidor de desenvolvimento
pnpm dev
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT_ID=template_para_cliente
NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID=template_para_usuario
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID=template_para_cliente
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

Consulte `SETUP_EMAILJS.md` para instruções detalhadas de configuração.

## Scripts Disponíveis

```bash
pnpm dev      # Servidor de desenvolvimento
pnpm build    # Build de produção
pnpm lint     # Verificação de lint
```

## Funcionalidades

### Sistema de Leads

- Captura nome e e-mail de usuários interessados em materiais
- Envia notificação para o cliente 
- Envia material para o usuário
- 12 materiais cadastrados no catálogo

### Formulário de Contato

- Campos: Nome, E-mail, WhatsApp, Assunto, Mensagem
- Validação de campos obrigatórios
- Formatação automática de WhatsApp
- Envio via EmailJS

### Responsividadegit

- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navegação adaptativa (menu hamburguer no mobile)

### Acessibilidade

- Semântica HTML5 correta
- ARIA labels e roles
- Focus states visíveis
- Suporte a reduced-motion

## Paleta de Cores

```css
--primary-brown: #5c4033      /* Texto principal */
--primary-orange: #e07b30     /* Destaques e CTAs */
--bg-cream: #f5e6d3           /* Fundo principal */
--bg-cream-light: #faf3eb     /* Fundo alternativo */
--bg-cream-dark: #e8d4c0      /* Fundo escuro */
```

## Licença

Projeto privado. Todos os direitos reservados a Scheilla Soares.

---

Desenvolvido com Next.js e Tailwind CSS.
