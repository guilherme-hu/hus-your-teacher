/**
 * Áreas de atuação para quem quer ser voluntário (a página /voluntariado).
 *
 * Não confundir com `areas` em `equipe.ts`: aqui é a descrição do que cada área
 * faz, para recrutar; lá é quem já está em cada uma.
 */

export type Sector = {
  title: string
  icon: string
  description: string
  responsibilities: string[]
  /** Classes do Tailwind — ver a paleta no CLAUDE.md. */
  color: string
  borderColor: string
}

export const sectors: Sector[] = [
  {
    title: "Communication & Marketing",
    icon: "📣",
    description: "Responsável por divulgar o projeto e fortalecer nossa presença digital por meio da criação de conteúdos educativos e materiais promocionais.",
    responsibilities: [
      "Content Creation: produção de posts, reels e designs",
      "Embassy: representação nas redes sociais e divulgação",
      "Apoio ao recrutamento de novos estudantes e voluntários"
    ],
    color: "bg-purple-100",
    borderColor: "border-purple-300"
  },
  {
    title: "Teaching",
    icon: "💻",
    description: "Responsável por ministrar aulas ao vivo e online para os estudantes do projeto.",
    responsibilities: [
      "Conduzir as aulas e acompanhar os alunos",
      "Utilizar o material didático já disponível no site",
      "Criação de atividades complementares (opcional)"
    ],
    color: "bg-red-100",
    borderColor: "border-red-300"
  },
  {
    title: "Curriculum Development",
    icon: "📚",
    description: "Responsável pela criação e desenvolvimento de materiais didáticos para publicação em nosso site oficial.",
    responsibilities: [
      "Explicações de gramática e atividades de vocabulário",
      "Exercícios de compreensão de leitura",
      "Outros recursos voltados ao aprendizado da língua inglesa"
    ],
    color: "bg-blue-100",
    borderColor: "border-blue-300"
  },
  {
    title: "Community Engagement & Outreach",
    icon: "🤝",
    description: "Responsável por fortalecer e expandir a comunidade do projeto por meio de iniciativas de relacionamento e crescimento.",
    responsibilities: [
      "Recrutar novos voluntários e estudantes",
      "Buscar parcerias com escolas e outras instituições",
      "Planejar iniciativas e eventos para ampliar nosso impacto"
    ],
    color: "bg-green-100",
    borderColor: "border-green-300"
  }
]

/** Registro de uma reunião da equipe — usado na página de voluntariado. */
export const reuniaoDaEquipe = {
  src: "/voluntariado/reuniao-marketing.jpeg",
  alt: "Reunião online da equipe de Communication & Marketing, com o perfil do projeto no Instagram compartilhado na tela e as voluntárias na chamada",
  legenda: "Uma reunião da equipe de Communication & Marketing",
}
