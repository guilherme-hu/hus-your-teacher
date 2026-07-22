import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Heart, BookOpen, PenTool, Share2, Award, ClipboardList } from "lucide-react"

export default function VoluntariadoPage() {
  const sectors = [
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

      {/* Hero Section */}
      <section className="py-20 px-4 bg-pink-400 vignette text-center">
        <Badge className="mb-6 bg-pink-500 text-white border-0 retro-text text-base px-6 py-2">
          Junte-se à Causa 💖
        </Badge>
        <h2 className="text-5xl md:text-6xl vintage-heading text-white mb-8">Seja um voluntário no Hu&apos;s Your Teacher! ✨</h2>
        <p className="text-xl md:text-xl text-white/90 retro-text max-w-4xl mx-auto leading-relaxed mb-6">
          O Hu&apos;s Your Teacher é um projeto sem fins lucrativos dedicado a democratizar o acesso ao aprendizado da língua inglesa. Acreditamos que o inglês é uma ferramenta de oportunidades, educação e conexão global, e nossa missão é torná-lo acessível a todos.
        </p>
        <p className="text-xl md:text-xl text-white/90 retro-text max-w-4xl mx-auto leading-relaxed">
          Se você deseja contribuir com impacto social e fazer parte de uma equipe comprometida com a educação, preencha o formulário abaixo e candidate-se a uma de nossas áreas de atuação!
        </p>
      </section>


      {/* Sectors Section */}
      <section className="py-20 px-4 bg-pink-50/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl vintage-heading text-gray-800 mb-6">Onde você pode atuar? 🎯</h3>
            <p className="text-xl text-gray-600 retro-text max-w-2xl mx-auto">
              Descubra os nossos setores e veja qual combina mais com as suas habilidades e interesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sectors.map((sector, index) => (
              <Card key={index} className={`vintage-card ${sector.color} border-2 ${sector.borderColor} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 scrapbook-tape`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl">{sector.icon}</span>
                    <CardTitle className="text-2xl text-gray-800 vintage-heading">{sector.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-700 retro-text text-lg">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-bold text-gray-800 mb-3 retro-text text-lg">O que você faria:</h4>
                  <ul className="space-y-2">
                    {sector.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 retro-text">
                        <span className="text-pink-500 mt-1">⭐</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-5xl vintage-heading text-gray-800 mb-6">Por que ser voluntário? 💭</h3>
          <p className="text-xl text-gray-700 retro-text mb-10 max-w-2xl mx-auto">
            Ouça o relato de quem já faz a diferença no nosso projeto e veja como essa experiência pode ser transformadora! 
          </p>
          <p className="text-xl text-gray-700 retro-text mb-10 max-w-2xl mx-auto">
            By Teacher Nicole R.
          </p>
          <div className="vintage-card p-4 rounded-2xl mx-auto shadow-xl scrapbook-tape border-2 border-pink-300 max-w-3xl">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center photo-border">
              <video
                controls
                className="w-full h-full object-contain"
              >
                {}
                <source src="/videos/depoimento.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 px-4 bg-blue-50/80">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-blue-300 shadow-lg">
            <Award className="w-12 h-12 text-blue-600" />
          </div>
          <h3 className="text-5xl vintage-heading text-gray-800 mb-8">Certificação e Benefícios 🎓</h3>
          <p className="text-xl text-gray-700 retro-text mb-6 leading-relaxed">
            Nós valorizamos imensamente o tempo e a dedicação de nossos voluntários. Ao fazer parte da nossa equipe, você não só ajuda a transformar a vida de diversos estudantes, mas também desenvolve suas próprias habilidades!
          </p>
          <div className="bg-white/60 p-8 rounded-2xl border-2 border-blue-200 text-left max-w-2xl mx-auto shadow-sm">
            <h4 className="text-2xl vintage-heading text-gray-800 mb-4">Como certificamos o seu auxílio?</h4>
            <p className="text-lg text-gray-700 retro-text mb-4">
              ✅ Emitimos <strong>Certificados de Horas Complementares</strong> (horas de voluntariado) baseados na sua participação e dedicação nas atividades.
            </p>
            <p className="text-lg text-gray-700 retro-text">
              ✅ Você poderá adicionar o Hu&apos;s Your Teacher em seu <strong>currículo e LinkedIn</strong>, mostrando que possui experiência prática e um forte compromisso social.
            </p>
          </div>
        </div>
      </section>

      {/* Form CTA Section */}
      <section className="py-24 px-4 bg-yellow-100/80 vignette text-center border-t border-yellow-200">
        <h3 className="text-5xl vintage-heading text-gray-800 mb-6">Pronto para causar impacto? 🚀</h3>
        <p className="text-xl text-gray-700 retro-text max-w-2xl mx-auto mb-10">
          Preencha o nosso formulário de inscrição para voluntários e aguarde o nosso contato. Estamos ansiosos para te conhecer! 💛
        </p>
        
        <Button
          size="lg"
          className="bg-yellow-300 text-gray-800 hover:bg-yellow-400 text-xl px-12 py-8 retro-text shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl"
          asChild
        >
          {/* USER: REPLACE THE LINK BELOW WITH YOUR ACTUAL GOOGLE FORMS VOLUNTEER LINK */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7qeD9KsP0qAl9fdqdXLcitEkQS1EIa0GrbkTm8gMkKOIJnw/viewform?usp=dialog" target="_blank" rel="noreferrer noopener">
            <ClipboardList className="w-6 h-6 mr-3" />
            Preencher Formulário de Voluntariado 📝
          </a>
        </Button>
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
