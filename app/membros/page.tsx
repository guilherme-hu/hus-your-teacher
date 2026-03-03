import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"

const coreTeam = [
  {
    name: "Jessie Hu",
    role: "Chief Executive Officer",
    description: "Organização e gerência geral do projeto",
    avatar: "/dudu.jpeg",
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

const areas = [
  {
    label: "Teachers",
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
        name: "Carmen B.",
        role: "Teaching Management Officer",
        description: "",
        avatar: "/placeholder_profile.jpg",
        icon: "🌟",
      },
      {
        name: "Clara R.",
        role: "Curriculum Development Coordinator & Teacher",
        description: "",
        avatar: "/members/clara.jpeg",
        icon: "🌟",
      },
      {
        name: "Nicole R.",
        role: "Teacher",
        description: "",
        avatar: "/members/nicole.jpeg",
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
        name: "Clara R.",
        role: "Curriculum Development Coordinator & Teacher",
        description: "",
        avatar: "/members/clara.jpeg",
        icon: "🌟",
        },
        {
        name: "Nathalya V.",
        role: "Curriculum Development Member",
        description: "",
        avatar: "/members/nathalya.jpeg",
        icon: "🌟",
        },
        {
        name: "Bruna B.",
        role: "Curriculum Development Member",
        description: "",
        avatar: "/members/bruna.jpeg",
        icon: "🌟",
        },
    ],
  },
  {
    label: "Communication & Marketing",
    icon: "📣",
    description: "Cuidam da divulgação do projeto nas redes sociais e do design visual da marca, ampliando o alcance do Hu's Your Teacher.",
    members: [
        {
        name: "Brenda T.",
        role: "Communication & Marketing Coordinator",
        description: "",
        avatar: "/members/brenda.jpeg",
        icon: "🌟",
        },

    ],
  },
  {
    label: "Ambassadors",
    icon: "🤝",
    description: "Representam e divulgam o projeto em suas comunidades, conectando novos alunos e parceiros ao Hu's Your Teacher.",
    members: [
        {
        name: "Thayllane B.",
        role: "Ambassador",
        description: "",
        avatar: "/members/thayllane.jpeg",
        icon: "🌟",
        },
        {
        name: "Camila T.",
        role: "Ambassador",
        description: "",
        avatar: "/members/camila.jpeg",
        icon: "🌟",
        },
    ],
  },

]

type Member = {
  name: string
  role: string
  description: string
  avatar: string
  icon: string
}

function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="w-full text-center border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scrapbook-tape overflow-hidden bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200">
      {/* Decorative top strip */}
      <div className="h-2 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-300" />
      <CardHeader className="pt-6">
        <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-pink-300 ring-offset-2 ring-offset-pink-100 shadow-md">
          <Image
            src={member.avatar || "/placeholder.svg"}
            alt={member.name}
            width={112}
            height={112}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl">{member.icon}</span>
          <CardTitle className="text-lg text-gray-800 vintage-heading">{member.name}</CardTitle>
        </div>
        <CardDescription className="text-rose-500 handwritten font-semibold text-md">{member.role}</CardDescription>
      </CardHeader>
      {member.description ? (
        <CardContent className="pb-6">
          <p className="text-gray-600 retro-text text-sm">{member.description}</p>
        </CardContent>
      ) : (
        <div className="pb-6" />
      )}
    </Card>
  )
}

export default function MembrosPage() {
  return (
    <div className="min-h-screen crayon-scribbles film-grain dreamy">
      {/* Header */}
      <header className="border-b border-pink-300 bg-pink-50/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <div>
              <h1 className="text-2xl vintage-heading text-gray-800">Hu&apos;s Your Teacher</h1>
              <p className="text-sm text-pink-600 handwritten italic">Hu cares? We do.</p>
            </div>
          </div>
          <Button variant="outline" className="border-2 border-pink-400 text-pink-700 hover:bg-pink-50 retro-text" asChild>
            <Link href="/">← Voltar ao Início</Link>
          </Button>
        </div>
      </header>

      {/* Page Hero */}
      <section className="py-20 px-4 bg-pink-400 vignette text-center">
        <h2 className="text-6xl vintage-heading text-white mb-6">Nossa Família 👨‍👩‍👧‍👦</h2>
        <p className="text-xl text-white/90 retro-text max-w-2xl mx-auto">
          Conheça todas as pessoas incríveis que tornam o Hu&apos;s Your Teacher possível. Cada membro traz algo único
          ao projeto. 💕
        </p>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 bg-pink-50/60">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-500 text-white border-0 retro-text text-base px-6 py-2 text-lg">
              ⭐ Core Team
            </Badge>
            <p className="text-gray-500 retro-text mt-4">Os fundadores do projeto, responsáveis pela liderança macro do projeto.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {coreTeam.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Area Sections */}
      <section className="py-16 px-4 bg-white/40">
        <div className="container mx-auto max-w-6xl space-y-20">
          {areas.map((area) => (
            <div key={area.label}>
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-pink-400 text-white border-0 retro-text text-base px-6 py-2">
                  {area.icon} {area.label}
                </Badge>
                {area.description && (
                  <p className="text-gray-500 retro-text mt-3 max-w-xl mx-auto">{area.description}</p>
                )}
              </div>
              {area.members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                  {area.members.map((member, index) => (
                    <MemberCard key={index} member={member} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-400 retro-text italic">Em breve... 🌱</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-pink-400 vignette text-center">
        <h3 className="text-4xl vintage-heading text-white mb-6">Quer fazer parte? 🌟</h3>
        <p className="text-white/90 retro-text text-lg mb-8 max-w-xl mx-auto">
          Adoraríamos ter você como voluntário! Entre em contato com a gente, pode ser por email ou por meio de nossa conta do Instagram! 💌
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-pink-200 text-pink-600 hover:bg-pink-300 text-lg px-10 py-8 retro-text photo-border"
            asChild
          >
            <a href="mailto:husyouteacher@gmail.com">husyouteacher@gmail.com 📧</a>
          </Button>
          <Button
            size="lg"
            className="bg-pink-200 text-pink-600 hover:bg-pink-300 text-lg px-10 py-8 retro-text photo-border"
            asChild
          >
            <a href="https://www.instagram.com/husyourteacher/" target="_blank" rel="noreferrer noopener">
              📸 @husyourteacher
            </a>
          </Button>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-center text-yellow-200 retro-text">
        <p>
          &copy; {new Date().getFullYear()} Hu&apos;s Your Teacher. Feito com ❤️ para aprendizes em todos os lugares. 🌟
        </p>
      </footer>
    </div>
  )
}

