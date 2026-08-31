/**
 * Fonte única das pessoas do projeto.
 *
 * `coreTeam` são os três primos fundadores (aparecem na home e em /membros).
 * `areas` são os voluntários por área de atuação, só em /membros.
 *
 * Para adicionar alguém: uma entrada em `members` da área certa. Sem foto, use
 * `/placeholder_profile.jpg`. `description` é opcional — omita em vez de passar
 * string vazia.
 */

export type Member = {
  name: string
  role: string
  /** Omita quando não houver descrição. */
  description?: string
  /** Caminho dentro de `public/`. Sem query string — o next/image otimizado recusa. */
  avatar: string
  /** Emoji ao lado do nome. */
  icon: string
}

/** O núcleo fundador. `Member` sem campos opcionais. */
export type CoreMember = Required<Member>

export type Subarea = {
  label: string
  description?: string
  members: Member[]
}

export type Area = {
  label: string
  icon: string
  description?: string
  members?: Member[]
  subareas?: Subarea[]
}

export const coreTeam: CoreMember[] = [
  {
    name: "Jessie Hu",
    role: "Chief Executive Officer",
    description: "Organização e gerência geral do projeto",
    avatar: "/members/jessie.jpeg",
    icon: "🎓",
  },
  {
    name: "Emily Hu",
    role: "Chief Marketing Officer",
    description: "Divulgação e design do projeto",
    avatar: "/bonnie.jpeg",
    icon: "🎨",
  },
  {
    name: "Guilherme Hu",
    role: "Chief Technology Officer",
    description: "Desenvolvimento e manutenção do site",
    avatar: "/bingo.jpeg",
    icon: "💻",
  },
]

/** Voluntários por área de atuação. Só /membros usa. */
export const areas: Area[] = [
  {
    label: "Teaching",
    icon: "🍎",
    description: "Responsáveis por ministrar as aulas online, criando um ambiente de aprendizado interativo e acolhedor para os alunos.",
    members: [
      // {
      //   name: "Nome",
      //   role: "Cargo",
      //   description: "Descrição",
      //   avatar: "/foto.jpeg",
      //   icon: "🌟",
      // },
      {
        name: "Nicole R.",
        role: "Teaching Coordinator",
        avatar: "/members/nicole.jpeg",
        icon: "🌟",
      },
      {
        name: "Carmen B.",
        role: "Teaching Management Officer",
        avatar: "/placeholder_profile.jpg",
        icon: "🌟",
      },
      {
        name: "Lina M.",
        role: "Teacher",
        avatar: "/placeholder_profile.jpg",
        icon: "🌟",
      },
    ],
  },
  {
    label: "Curriculum Development",
    icon: "📝",
    description: "Planejam e desenvolvem os materiais didáticos e atividades utilizados nas aulas e disponibilizados gratuitamente no site.",
    members: [
        {
        name: "Maria Clara A.",
        role: "Curriculum Development Coordinator",
        avatar: "/members/maria.jpeg",
        icon: "🌟",
        },
        {
        name: "Isabele A.",
        role: "Curriculum Development Member",
        avatar: "/members/isabele.jpeg",
        icon: "🌟",
        },
        {
        name: "Juliana L.",
        role: "Curriculum Development Member and Consultant",
        avatar: "/members/juliana.jpeg",
        icon: "🌟",
        },
        {
        name: "Marielly N.",
        role: "Curriculum Development Member",
        avatar: "/placeholder_profile.jpg",
        icon: "🌟",
        },
    ],
  },
  {
    label: "Communication & Marketing",
    icon: "📣",
    description: "Responsáveis por divulgar o projeto, fortalecer a marca e conectar novas pessoas ao Hu's Your Teacher.",
    subareas: [
      {
        label: "Content Creators",
        description: "Cuidam da divulgação do projeto nas redes sociais e do design visual da marca, ampliando o alcance do Hu's Your Teacher.",
        members: [
          {
            name: "Brenda T.",
            role: "Communication & Marketing Coordinator",
            avatar: "/members/brenda.jpeg",
            icon: "🌟",
          },
          {
            name: "Evelly S.",
            role: "Communication & Marketing Member",
            avatar: "/members/evelly.jpeg",
            icon: "🌟",
          },
        ],
      },
      {
        label: "Ambassadors",
        description: "Representam e divulgam o projeto em suas comunidades, conectando novos alunos e parceiros ao Hu's Your Teacher.",
        members: [
          {
            name: "Camila T.",
            role: "Ambassador",
            avatar: "/members/camila.jpeg",
            icon: "🌟",
          },
          {
            name: "Carol S.",
            role: "Ambassador",
            avatar: "/members/carol.jpeg",
            icon: "🌟",
          },
          {
            name: "Tamires F.",
            role: "Ambassador",
            avatar: "/members/tamires.jpeg",
            icon: "🌟",
          },
          {
            name: "Thayllane B.",
            role: "Ambassador",
            avatar: "/members/thayllane.jpeg",
            icon: "🌟",
          },
        ],
      },
    ],
  },
  {
    label: "Outreach & Community Engagement",
    icon: "🤝",
    description: "Responsáveis por estabelecer parcerias, engajar a comunidade e expandir o impacto do projeto, conectando pessoas e recursos para fortalecer a missão do Hu's Your Teacher.",
    members: [
        {
        name: "Valentina C.",
        role: "Outreach & Community Engagement Member",
        avatar: "/members/valentina.jpeg",
        icon: "🌟",
        },
       
    ],
  },

]
