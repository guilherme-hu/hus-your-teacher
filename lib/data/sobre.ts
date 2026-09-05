/**
 * Conteúdo da página /sobre — a história do projeto, as frentes de atuação e os
 * princípios de ensino.
 *
 * A prosa mais longa vive na própria página; aqui ficam só as listas, que são o
 * que muda com mais frequência.
 */

export type Marco = {
  /** Rótulo do período — aparece na fita da linha do tempo. */
  quando: string
  titulo: string
  texto: string
  icon: string
}

/** Linha do tempo do projeto, da sala de igreja até hoje. */
export const linhaDoTempo: Marco[] = [
  {
    quando: "2022",
    titulo: "Uma sala, um sábado",
    texto:
      "Numa sala de igreja em São Paulo, uma das nossas fundadoras percebeu que muitas crianças e adolescentes da comunidade chinesa tinham pouco ou nenhum acesso ao inglês. Em vez de esperar isso mudar, ela começou pelo que estava ao alcance dela: ensinar. Todo sábado, de graça.",
    icon: "🌱",
  },
  {
    quando: "2022 - 2024",
    titulo: "Mais de 50 páginas feitas à mão",
    texto:
      "Por quase dois anos, mais de 10 crianças e adolescentes passaram por aquelas aulas. E nasceram mais de 50 páginas de material didático próprio, escritas sob medida para o nível e as dúvidas de cada aluno.",
    icon: "✏️",
  },
  {
    quando: "2025",
    titulo: "A escolha",
    texto:
      "Com o começo da faculdade, manter as aulas presenciais todo sábado virou impossível. Dava para encerrar ali. Em vez disso, ela chamou o primo, estudante de Engenharia de Computação na UFRJ, para construir um lugar onde aquele material continuasse existindo — de graça, para qualquer pessoa.",
    icon: "💻",
  },
  {
    quando: "Hoje",
    titulo: "Sem paredes",
    texto:
      "A sala virou plataforma, Instagram, aulas online ao vivo e uma equipe de voluntários. O mesmo material escrito para 10 alunos agora chega a gente que nunca teria entrado naquela sala.",
    icon: "🌏",
  },
]

export type Frente = {
  titulo: string
  texto: string
  icon: string
  /** Classes do Tailwind — ver a paleta no CLAUDE.md. */
  bg: string
  borda: string
}

/** As três frentes em que o projeto se apoia. */
export const frentes: Frente[] = [
  {
    titulo: "Materiais gratuitos",
    texto:
      "Tudo que produzimos fica no ar, sem cadastro e sem paywall. Um material escrito uma vez continua servindo cada aluno novo que chega.",
    icon: "📚",
    bg: "bg-green-50",
    borda: "border-green-300",
  },
  {
    titulo: "Aulas online ao vivo",
    texto:
      "Porque material sozinho não basta. Na aula dá para perguntar, errar, praticar e ser corrigido por alguém que se importa.",
    icon: "💻",
    bg: "bg-blue-50",
    borda: "border-blue-300",
  },
  {
    titulo: "Rede de voluntários",
    texto:
      "Quem dá aula e quem escreve material multiplica o alcance do projeto. Cada voluntário faz uma aula virar muitas.",
    icon: "💛",
    bg: "bg-yellow-100",
    borda: "border-yellow-300",
  },
]

export type Principio = {
  titulo: string
  texto: string
  icon: string
}

/** Como ensinamos — a metodologia, ainda em construção. */
export const principios: Principio[] = [
  {
    titulo: "Prática antes de regra",
    texto:
      "Explicação vem junto de exercício, leitura, escrita e conversa. Gramática solta não ensina ninguém a falar.",
    icon: "🗣️",
  },
  {
    titulo: "Contexto que faz sentido",
    texto:
      "Em vez de listas de palavras soltas, temas, diálogos e situações que aparecem no dia a dia de verdade.",
    icon: "🌍",
  },
  {
    titulo: "Repetição que gruda",
    texto:
      "Os conteúdos voltam em atividades diferentes, para fixar de verdade e deixar o aluno avançar aos poucos.",
    icon: "🔁",
  },
  {
    titulo: "Ainda em construção",
    texto:
      "Estamos sistematizando nossa metodologia e criando formas melhores de acompanhar a evolução de cada aluno.",
    icon: "🌤️",
  },
]
