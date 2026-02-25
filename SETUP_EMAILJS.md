# Configuracao do EmailJS

Este documento explica como configurar o sistema de envio de e-mails via EmailJS para captura de leads e formulario de contato.

## Visao Geral

O projeto utiliza EmailJS com **2 templates reutilizaveis** que atendem tanto o sistema de leads quanto o formulario de contato:

1. **Template A (Cliente)** - Notificacao para Scheilla sobre novos contatos e downloads
2. **Template B (Usuario)** - E-mail de resposta automática com link do material solicitado

O template do cliente e reutilizado para:
- notificacao de download de material
- recebimento de mensagens do formulario de contato

### Materiais Cadastrados (12 total)

| Secao | ID | Titulo |
|-------|-----|--------|
| A Enseada | enseada_1 | Aprendendo a parar |
| A Enseada | enseada_2 | Escutando o corpo |
| A Enseada | enseada_3 | Cultivando presenca |
| O Espelho | espelho_1 | Reconhecimento tardio |
| O Espelho | espelho_2 | Mascaramento |
| O Espelho | espelho_3 | Outras Travessias |
| O Cais | cais_1 | O Diagnostico |
| O Cais | cais_2 | A Busca |
| O Cais | cais_3 | O Esgotamento |
| O Cais | cais_4 | O Recomeco |
| A Praia | praia_1 | Linha 1 — Crescer Diferente |
| A Praia | praia_2 | Linha 2 — Caderno de Travessias |

## Configuracao do EmailJS

### 1. Criar Conta

Acesse [emailjs.com](https://www.emailjs.com/) e crie uma conta gratuita.

### 2. Adicionar Servico de E-mail

1. No dashboard, va em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Conecte sua conta de e-mail
5. Copie o **Service ID**

### 3. Criar Templates

Voce precisa criar **2 templates**, que serao reutilizados em todo o projeto.

---

#### Template A: Notificacao para Cliente

**Uso:**
- Download de material
- Formulario de contato

**Nome sugerido:** `Cliente`

Este template recebe todos os contatos do site. Os campos sao preenchidos de acordo com a origem:
- **Download de material**: preenche dados do material, deixa mensagem/topico vazios
- **Formulario de contato**: preenche mensagem/topico, deixa dados do material vazios


**Variaveis utilizadas:**

| Variavel | Download Material | Formulario Contato |
|----------|-------------------|-------------------|
| `{{source}}` | "Download de material" | "Formulario de contato" |
| `{{lead_name}}` | Nome do usuario | Nome do contato |
| `{{lead_email}}` | E-mail do usuario | E-mail do contato |
| `{{lead_whatsapp}}` | (vazio) | WhatsApp |
| `{{lead_topic}}` | (vazio) | Assunto selecionado |
| `{{lead_message}}` | (vazio) | Mensagem |
| `{{section_title}}` | Secao do material | (vazio) |
| `{{material_title}}` | Titulo do material | (vazio) |
| `{{material_id}}` | ID do material | (vazio) |
| `{{timestamp}}` | Data/hora | Data/hora |

---

#### Template B: E-mail para Usuario

**Nome sugerido:** `Usuario`

Este template envia o material para o usuario apos o cadastro.

**Uso:**
- Envio do material solicitado


**Variaveis utilizadas:**

| Variavel | Descricao |
|----------|-----------|
| `{{lead_name}}` | Nome do usuario |
| `{{material_title}}` | Titulo do material solicitado |
| `{{material_link}}` | Link direto para download/acesso |

---

### 4. Obter Public Key

1. Va em **Account** > **General**
2. Copie sua **Public Key**

### 5. Configurar Variaveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_CLIENT_ID=id_do_template_a
NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID=id_do_template_b
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

**Apenas 4 variaveis sao necessarias** para o funcionamento completo do sistema.

## Gerenciamento de Materiais

### Adicionar Links aos Materiais

Edite `constants/materialsCatalog.ts`:

```typescript
enseada_1: {
  id: "enseada_1",
  sectionId: "enseada",
  sectionTitle: "A Enseada",
  materialTitle: "Aprendendo a parar",
  materialLink: "https://seu-link.com/material.pdf", // Adicionar link aqui
  clientEmailSubject: "Novo download — A Enseada: Aprendendo a parar",
  userEmailSubject: "Seu material: Aprendendo a parar",
},
```
### Comportamento do Sistema

**Quando `materialLink` esta vazio (`""`):**
- Nao envia e-mails
- Mostra mensagem: "Este material ainda nao esta disponivel"

**Quando `materialLink` esta preenchido:**
- Envia 2 e-mails (cliente + usuario)
- Exibe toast de sucesso
- Fecha o modal

### Adicionar Novos Materiais

1. Adicione no catalogo (`constants/materialsCatalog.ts`):

```typescript
novo_material: {
  id: "novo_material",
  sectionId: "enseada",
  sectionTitle: "A Enseada",
  materialTitle: "Novo Material",
  materialLink: "",
  clientEmailSubject: "Novo download — A Enseada: Novo Material",
  userEmailSubject: "Seu material: Novo Material",
}
```

2. Adicione o card na section correspondente referenciando o `materialId`.

## Testar o Sistema

### Sistema de Leads (Download)

1. Inicie o projeto: `pnpm dev`
2. Navegue ate uma secao com downloads (Enseada, Espelho, Cais, Praia)
3. Clique em um card
4. Preencha nome e e-mail
5. Clique em "Receber conteudo"

**Resultado esperado:**
- Template A enviado para cliente (com dados do material, sem mensagem)
- Template B enviado para usuario (com link do material + mensagem)

### Formulario de Contato

1. Navegue ate a secao Contato
2. Preencha todos os campos
3. Clique em "Enviar mensagem"

**Resultado esperado:**
- Template A enviado para cliente (com mensagem/topico, sem dados de material)

## Troubleshooting

**Erro: "Configuracao de e-mail incompleta"**
- Verifique se todas as 4 variaveis de ambiente estao configuradas
- Reinicie o servidor apos adicionar variaveis

**E-mails nao chegam:**
- Verifique se os templates estao ativos no EmailJS
- Confirme que o Service esta conectado corretamente
- Verifique spam/lixo eletronico
- Teste os templates manualmente no dashboard do EmailJS

**"Material nao encontrado":**
- Verifique se o `materialId` no card corresponde ao ID no catalogo

## Seguranca

As variaveis com prefixo `NEXT_PUBLIC_` sao expostas no cliente. Isso e **seguro** para EmailJS porque:

- A Public Key e publica por design
- O EmailJS tem rate limiting integrado
- E possivel configurar domain whitelisting no dashboard
- Nao ha informacoes sensiveis expostas (nao e um API key de servidor)
