export type MaterialItem = {
  id: string 
  sectionId: string 
  sectionTitle: string
  materialTitle: string
  materialLink: string // pode iniciar vazio ""
  clientEmailSubject: string
  userEmailSubject: string
}

export const MATERIALS_CATALOG: Record<string, MaterialItem> = {
  // ENSEADA (3 materiais)
  enseada_1: {
    id: "enseada_1",
    sectionId: "enseada",
    sectionTitle: "A Enseada",
    materialTitle: "Aprendendo a parar",
    materialLink: "https://drive.google.com/file/d/1JNdxGeESKLVQRd_i6Dc1PzA9ztp6RfL9/view?usp=drive_link",
    clientEmailSubject: "Novo download — A Enseada: Aprendendo a parar",
    userEmailSubject: "Seu material: Aprendendo a parar",
  },
  enseada_2: {
    id: "enseada_2",
    sectionId: "enseada",
    sectionTitle: "A Enseada",
    materialTitle: "Escutando o corpo",
    materialLink: "",
    clientEmailSubject: "Novo download — A Enseada: Escutando o corpo",
    userEmailSubject: "Seu material: Escutando o corpo",
  },
  enseada_3: {
    id: "enseada_3",
    sectionId: "enseada",
    sectionTitle: "A Enseada",
    materialTitle: "Cultivando presença",
    materialLink: "",
    clientEmailSubject: "Novo download — A Enseada: Cultivando presença",
    userEmailSubject: "Seu material: Cultivando presença",
  },

  // ESPELHO (3 materiais)
  espelho_1: {
    id: "espelho_1",
    sectionId: "espelho",
    sectionTitle: "O Espelho-d'Água",
    materialTitle: "Reconhecimento tardio",
    materialLink: "",
    clientEmailSubject: "Novo download — O Espelho: Reconhecimento tardio",
    userEmailSubject: "Seu material: Reconhecimento tardio",
  },
  espelho_2: {
    id: "espelho_2",
    sectionId: "espelho",
    sectionTitle: "O Espelho-d'Água",
    materialTitle: "Mascaramento",
    materialLink: "",
    clientEmailSubject: "Novo download — O Espelho: Mascaramento",
    userEmailSubject: "Seu material: Mascaramento",
  },
  espelho_3: {
    id: "espelho_3",
    sectionId: "espelho",
    sectionTitle: "O Espelho-d'Água",
    materialTitle: "Outras Travessias",
    materialLink: "",
    clientEmailSubject: "Novo download — O Espelho: Outras Travessias",
    userEmailSubject: "Seu material: Outras Travessias",
  },

  // CAIS (4 materiais - travessias)
  cais_1: {
    id: "cais_1",
    sectionId: "cais",
    sectionTitle: "O Cais",
    materialTitle: "O Diagnóstico",
    materialLink: "",
    clientEmailSubject: "Novo download — O Cais: O Diagnóstico",
    userEmailSubject: "Seu material: O Diagnóstico",
  },
  cais_2: {
    id: "cais_2",
    sectionId: "cais",
    sectionTitle: "O Cais",
    materialTitle: "A Busca",
    materialLink: "",
    clientEmailSubject: "Novo download — O Cais: A Busca",
    userEmailSubject: "Seu material: A Busca",
  },
  cais_3: {
    id: "cais_3",
    sectionId: "cais",
    sectionTitle: "O Cais",
    materialTitle: "O Esgotamento",
    materialLink: "",
    clientEmailSubject: "Novo download — O Cais: O Esgotamento",
    userEmailSubject: "Seu material: O Esgotamento",
  },
  cais_4: {
    id: "cais_4",
    sectionId: "cais",
    sectionTitle: "O Cais",
    materialTitle: "O Recomeço",
    materialLink: "",
    clientEmailSubject: "Novo download — O Cais: O Recomeço",
    userEmailSubject: "Seu material: O Recomeço",
  },

  // PRAIA (2 materiais)
  praia_1: {
    id: "praia_1",
    sectionId: "praia",
    sectionTitle: "A Praia",
    materialTitle: "Linha 1 — Crescer Diferente",
    materialLink: "",
    clientEmailSubject: "Novo download — A Praia: Crescer Diferente",
    userEmailSubject: "Seu material: Crescer Diferente",
  },
  praia_2: {
    id: "praia_2",
    sectionId: "praia",
    sectionTitle: "A Praia",
    materialTitle: "Linha 2 — Caderno de Travessias",
    materialLink: "",
    clientEmailSubject: "Novo download — A Praia: Caderno de Travessias",
    userEmailSubject: "Seu material: Caderno de Travessias",
  },
}

export const WELCOME_MESSAGE = `Olá,
Que bom que você chegou.

O Escutas e Travessias nasceu do encontro entre psicologia, experiência vivida e cuidado com os ritmos humanos — especialmente quando a vida pede pausa, escuta e reorganização interna.

Os materiais que você recebe aqui não são respostas prontas nem fórmulas de desempenho. Eles são convites. Convites para olhar com mais gentileza para si, para os seus processos e para aquilo que, muitas vezes, não encontra lugar nos discursos rápidos do cotidiano.

Use este material no seu tempo.
Leia aos poucos, se precisar.
Pare quando for demais.
Retome quando fizer sentido.

Este espaço foi criado para acolher travessias reais — inclusive as silenciosas.

Se quiser acompanhar outros conteúdos, reflexões e materiais, você será bem-vinda(o).
Se preferir apenas ficar com o que chegou agora, isso também está absolutamente certo.

Obrigada pela confiança.
Com cuidado,
Scheilla Soares
Psicóloga | Neuropsicóloga
CRP 12/01849
Escutas e Travessias`
