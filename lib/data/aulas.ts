/**
 * Conteúdo da página /aulas — como funcionam as aulas online, horários, galeria
 * e o FAQ.
 *
 * O FAQ é renderizado com `<details>`/`<summary>` nativos: sem JavaScript, sem
 * dependência nova e acessível por padrão. Não troque por um accordion de lib.
 */

export type ComoFunciona = {
  titulo: string
  texto: string
  icon: string
}

export const comoFunciona: ComoFunciona[] = [
  {
    titulo: "Uma vez por semana",
    texto:
      "Um encontro semanal ao vivo com a sua Teacher. Ela manda o link da reunião antes de cada aula — é só entrar.",
    icon: "📅",
  },
  {
    titulo: "100% online e ao vivo",
    texto:
      "Tudo acontece por videochamada, em tempo real. Não é aula gravada, e não temos turmas presenciais.",
    icon: "💻",
  },
  {
    titulo: "De graça, sempre",
    texto:
      "Não existe mensalidade, taxa de matrícula nem livro para comprar. Você só precisa de internet e vontade.",
    icon: "💛",
  },
  {
    titulo: "Com os nossos materiais",
    texto:
      "As aulas usam os PDFs que a gente mesmo produz. A Teacher avisa qual material vocês vão usar em cada encontro.",
    icon: "📚",
  },
  {
    titulo: "Planejadas semestre a semestre",
    texto:
      "Cada aula, atividade e lição de casa é planejada no começo do semestre, cobrindo gramática, vocabulário do dia a dia, fala e escrita.",
    icon: "🗺️",
  },
]

export type Turma = {
  nome: string
  dia: string
  horario: string
  nivel: string
}

/** Turmas em andamento. Mantenha em sincronia com a seção CTA da home. */
export const turmas: Turma[] = [
  { nome: "Turma Básico I", dia: "Quarta-feira", horario: "17:00 - 18:00", nivel: "Iniciante" },
]

export type Foto = {
  src: string
  alt: string
}

/** Registros das aulas online. Arquivos em `public/aulas/`. */
export const galeria: Foto[] = [
  {
    src: "/aulas/aula-1.jpeg",
    alt: "Tablet sobre uma mesa exibindo a aula online, com o slide 'Restaurantes e compras' e as participantes na chamada",
  },
  {
    src: "/aulas/aula-2.jpeg",
    alt: "Aula de Food Vocabulary acompanhada por um tablet, mostrando que dá para assistir de qualquer lugar",
  },
  {
    src: "/aulas/aula-3.jpeg",
    alt: "Aluno acompanhando a aula sobre saudações em inglês pelo tablet, com a Teacher apresentando os slides",
  },
  {
    src: "/aulas/aula-4.jpeg",
    alt: "Slide de encerramento da aula, com dois patinhos e a pergunta 'Do you have any question?', e a turma na chamada",
  },
]

export type Pergunta = {
  pergunta: string
  resposta: string
}

export const faq: Pergunta[] = [
  {
    pergunta: "Existe algum custo para participar das aulas?",
    resposta:
      "Não! As aulas são completamente gratuitas. Basta acompanhar os encontros online.",
  },
  {
    pergunta: "Preciso comprar algum livro?",
    resposta:
      "Não. Todo o material usado nas aulas é feito pelo Hu's Your Teacher e também é 100% gratuito — é só baixar os PDFs na nossa seção de materiais. Se você participa das aulas, a Teacher da sua turma avisa qual atividade vocês vão fazer.",
  },
  {
    pergunta: "Qual é a metodologia das aulas?",
    resposta:
      "Cada semestre é planejado do começo ao fim: aulas, lições de casa e atividades. A ideia é que você termine o semestre com mais noção de gramática, vocabulário do cotidiano, advérbios, preposições e escrita. Também coletamos as maiores dúvidas da turma para adaptar o syllabus e criar aulas especializadas. Todas as nossas Teachers são voluntárias e têm contato com a língua inglesa.",
  },
  {
    pergunta: "Existe idade mínima ou máxima?",
    resposta:
      "Não! O Hu's Your Teacher existe para democratizar o aprendizado de inglês, e isso inclui pessoas de todas as idades e de qualquer região do Brasil.",
  },
  {
    pergunta: "Como faço para me inscrever?",
    resposta:
      "É só clicar no botão de inscrição e preencher o formulário. Depois disso, alguém da administração te adiciona no grupo da sua turma no WhatsApp e te coloca em contato com a Teacher responsável. As aulas são semanais, e antes de cada uma a Teacher manda o link da reunião.",
  },
  {
    pergunta: "Preciso ligar a câmera durante a aula?",
    resposta:
      "Não é obrigatório. Mas engajamento e compromisso são essenciais para realmente aprender — participe, pergunte e faça as atividades.",
  },
  {
    pergunta: "Vocês oferecem aulas presenciais?",
    resposta: "Não. As aulas são 100% online, mas ao vivo e em tempo real.",
  },
  {
    pergunta: "Só existem turmas de nível básico?",
    resposta:
      "Por enquanto sim, só oferecemos aulas para níveis básicos de fluência. Criar turmas para níveis mais avançados está nos planos para o futuro!",
  },
]

/** Depoimento de aluna, usado na página de aulas. */
export const depoimento = {
  texto:
    "Quero deixar meu feedback sobre o projeto Hu's Your Teacher, porque ele tem me ajudado muito nas minhas aulas. A Nicole explica muito bem os conteúdos e consegue tornar o inglês muito mais fácil de compreender e aplicar. As aulas e os materiais facilitam muito a minha rotina como professora e também contribuem bastante para o aprendizado dos meus alunos. Sou muito grata por poder contar com esse projeto e com todo esse suporte.",
  autora: "Victória M.",
  turma: "aluna da turma de quarta",
}
