/* Server component: depois que o contador de downloads saiu, a home não tem mais
   estado de cliente. Isso permite exportar `metadata` própria — o que um
   "use client" impede. Os pedaços interativos (Reveal, CountUp,
   VintageStickers) são client components importados aqui. */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Heart, Users, BookOpen, Star, Globe, Instagram, Sparkles, Clock, Handshake, FileText, MousePointerClick, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VintageStickers } from "@/components/vintage-stickers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { CartaoAcesso } from "@/components/cartao-acesso"
import { downloadHref, featuredSheets } from "@/lib/data/materiais"
import { coreTeam } from "@/lib/data/equipe"
import { FORMULARIOS, LINK_EXTERNO } from "@/lib/site"


/* Dados no escopo do módulo — não precisam ser recriados a cada render. */
const achievementsList = [
  {
    icon: Instagram,
    iconColor: "text-pink-700",
    bgClass: "bg-pink-100",
    borderClass: "border-pink-400",
    value: "1000+",
    title: "Seguidores",
    description: "Acompanhando o projeto no Instagram"
  },
  {
    icon: Globe,
    iconColor: "text-blue-700",
    bgClass: "bg-blue-100",
    borderClass: "border-blue-400",
    value: "10000+",
    title: "Alcances nas Redes",
    description: "Perfis alcançados pelos nossos conteúdos"
  },
  {
    icon: Clock,
    iconColor: "text-orange-700",
    bgClass: "bg-orange-100",
    borderClass: "border-orange-400",
    value: "30+",
    title: "Horas de Aula",
    description: "Dadas no primeiro semestre de 2026"
  },
  {
    icon: Users,
    iconColor: "text-green-700",
    bgClass: "bg-green-200",
    borderClass: "border-green-400",
    value: "15+",
    title: "Voluntários",
    description: "Recrutados para auxiliar no projeto"
  },
  {
    icon: Handshake,
    iconColor: "text-purple-700",
    bgClass: "bg-purple-100",
    borderClass: "border-purple-400",
    value: "2",
    title: "Colaborações",
    description: "Parcerias incríveis realizadas"
  },
  {
    icon: Sparkles,
    iconColor: "text-yellow-700",
    bgClass: "bg-yellow-200",
    borderClass: "border-yellow-400",
    value: "250+",
    title: "Pessoas Impactadas",
    description: "Vidas transformadas pela educação"
  },
  {
    icon: FileText,
    iconColor: "text-teal-800",
    bgClass: "bg-teal-100",
    borderClass: "border-teal-300",
    value: "150+",
    title: "Páginas de Material",
    description: "Conteúdo disponibilizado gratuitamente"
  },
  {
    icon: MousePointerClick,
    iconColor: "text-cyan-700",
    bgClass: "bg-cyan-100",
    borderClass: "border-cyan-400",
    value: "~50",
    title: "Acessos mensais",
    description: "Visitantes explorando nossa plataforma"
  }
];

const heroHighlights = [
  {
    icon: Users,
    bg: "bg-green-300",
    title: "Independent Learners 👨‍🎓",
    description: "Students worldwide using our materials",
  },
  {
    icon: BookOpen,
    bg: "bg-blue-300",
    title: "50+ Worksheets 📄",
    description: "Comprehensive learning materials",
  },
  {
    icon: Globe,
    bg: "bg-pink-300",
    title: "Always Free 🎁",
    description: "No paywalls, no subscriptions",
  },
]

export const metadata = {
  title: "Materiais de inglês gratuitos e aulas online",
  description:
    'Baixe 60 materiais de inglês gratuitos — gramática, vocabulário, leitura e atividades — e participe das nossas aulas online ao vivo. Sem cadastro, sem paywall.',
}

export default function HomePage() {

  return (
    <div className="min-h-screen crayon-scribbles">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative vignette">
        <VintageStickers />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="mb-12">
            <Reveal>
              <Badge className="mb-8 bg-pink-600 text-white border-0 retro-text photo-border">
                🎉 100% Free Learning Materials
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-5xl sm:text-6xl md:text-8xl vintage-heading mb-8 text-gray-800 leading-tight">
                Learn English,
                <br />
                <span className="italic text-pink-700">Dream Bigger</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-2xl md:text-3xl handwritten italic text-pink-600 mb-8">&quot;Hu cares? We do.&quot; 💛</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex justify-center mb-8">
                <div className="relative rounded-full overflow-hidden photo-border animate-gentle-float w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px]">
                  <Image
                    src="/images/logo.jpg"
                    alt="Hu's Your Teacher Logo"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 360px"
                    className="object-cover rounded-sm"
                    priority
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed retro-text">
                Free, high-quality English learning materials created with love by three cousins. Perfect for kids, great
                for everyone. No barriers, just learning. 🌈
              </p>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch mb-16">
              <Button size="lg" className="vintage-btn text-lg px-8 py-6 h-auto whitespace-normal retro-text w-full sm:w-[320px]" asChild>
                <a href="/downloads/Welcome Activity.pdf" download className="flex flex-col gap-2 items-center justify-center text-center leading-tight">
                  <Download className="w-6 h-6 shrink-0" />
                  <span>Download Your First Material!</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-400 text-pink-800 hover:bg-pink-50 text-lg px-8 py-6 h-auto whitespace-normal retro-text photo-border w-full sm:w-[320px]"
                asChild
              >
                <a
                  href={FORMULARIOS.aluno}
                  {...LINK_EXTERNO}
                  className="flex flex-col gap-2 items-center justify-center text-center leading-tight"
                >
                  <Heart className="w-6 h-6 shrink-0" />
                  <span>Join Us as a Student in Online Classes!</span>
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {heroHighlights.map((highlight, index) => {
              const HighlightIcon = highlight.icon
              return (
                <Reveal key={highlight.title} delay={index * 120} className="text-center">
                  <div
                    className={`w-20 h-20 ${highlight.bg} rounded-full flex items-center justify-center mx-auto mb-6 photo-border animate-vintage-glow`}
                  >
                    <HighlightIcon className="w-10 h-10 text-gray-700" />
                  </div>
                  <h2 className="vintage-heading text-gray-800 mb-3 text-xl">{highlight.title}</h2>
                  <p className="text-gray-600 retro-text">{highlight.description}</p>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="#materials"
              aria-label="Ir para os materiais"
              className="animate-scroll-hint text-pink-600 hover:text-pink-800 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Learning Materials Section - IN PORTUGUESE */}
      <section id="materials" className="py-24 px-4 bg-green-50/60 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl vintage-heading mb-6 text-gray-800">Materiais de Aprendizado 📚</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto retro-text">
              Folhas de trabalho cuidadosamente elaboradas cobrindo todos os aspectos do aprendizado de inglês. Baixe,
              imprima e comece a aprender hoje! 🌟
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSheets.map((sheet, index) => (
              <Reveal key={index} delay={index * 70}>
                <Card className="vintage-card scrapbook-tape playful-card hover:shadow-xl h-full">
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs bg-yellow-100 text-gray-700 retro-text">
                        {sheet.level}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl card-emoji">{sheet.icon}</span>
                      <CardTitle className="text-lg text-gray-800 vintage-heading">{sheet.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 retro-text">{sheet.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full vintage-btn retro-text" asChild>
                      <a href={downloadHref(sheet.filePath)} download>
                        <Download className="w-4 h-4 mr-2" />
                        Baixar PDF 📥
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-16">
            <Button
              size="lg"
              className="vintage-btn text-lg md:text-xl px-10 md:px-16 py-8 h-auto retro-text shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/materiais">
                📚 Ver Todos os Materiais ✨
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-50/60">
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl vintage-heading mb-8 text-gray-800">Pronto para Começar a Aprender? 🚀</h2>
            <p className="text-lg md:text-xl mb-12 text-gray-600 retro-text">
              Junte-se a aprendizes que estão melhorando seu inglês com nossos materiais! Para complementar seus estudos, participe de nossas aulas online! Elas são completamente remotas, ao vivo e gratuitas. 🌍
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="inline-block vintage-card rounded-2xl px-8 py-6 mb-12">
              <p className="text-lg vintage-heading text-gray-800 mb-3">Horários de aula 🕐</p>
              <p className="text-lg text-gray-700 retro-text">Turma Básico I — Quarta-feira, 17:00–18:00</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="sunny" size="cta"
                asChild
              >
                <a
                  href={FORMULARIOS.aluno}
                  {...LINK_EXTERNO}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Responder ao Formulário de Inscrição 📥
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section - IN PORTUGUESE */}
      <section id="about" className="py-24 px-4 scroll-mt-24">
        {/* `max-w-5xl` em vez de 4xl: com colunas de 392px o texto quebrava demais e
            a coluna da esquerda ficava 270px mais alta que a do cartão. */}
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <p className="handwritten text-xl text-pink-700 mb-3">Como tudo começou</p>
              <h2 className="text-4xl md:text-5xl vintage-heading mb-8 text-gray-800">
                De uma sala de igreja para o Brasil 🌏
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed retro-text">
                Em 2022, numa sala de igreja em São Paulo, uma das nossas fundadoras passou a dar aulas de
                inglês de graça todo sábado. Eram crianças e adolescentes da comunidade que não tinham
                acesso ao idioma em nenhum outro lugar. 🌱
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed retro-text">
                Quando a faculdade tornou impossível continuar presencialmente, sobrou uma escolha: encerrar
                ali ou fazer aquele trabalho alcançar mais gente. Você está olhando para a segunda opção. 💛
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed retro-text">
                Hoje são materiais gratuitos para baixar, aulas online ao vivo e uma equipe de voluntários.
                Sem cadastro, sem mensalidade, sem letras miúdas. 📚
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="text-gray-700 retro-text">Feito para crianças, aberto a todos 👶</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-500 fill-current" />
                  <span className="text-gray-700 retro-text">Feito com amor 💝</span>
                </div>
              </div>
            </Reveal>

            {/* A coluna estica até a altura da de texto (`items-stretch`, o padrão do
                grid) e o `justify-between` prende o cartão no topo e o botão no pé —
                as duas colunas terminam na mesma linha.

                `lg:mt-10` são exatamente os 40px do bloco "Como tudo começou"
                (28px de line-height + 12px de margem), para o topo do cartão nascer
                na altura do <h2> e não do olho. Sem `h-full`: com `stretch` o item já
                preenche a linha descontando a margem, enquanto `height: 100%` a
                ignoraria e vazaria 40px para baixo. */}
            <Reveal
              delay={150}
              className="flex flex-col items-center justify-between gap-10 lg:mt-10"
            >
              <CartaoAcesso />
              <Button variant="vintage" size="cta" className="w-full max-w-sm" asChild>
                <Link href="/sobre">📖 Conheça nossa história completa</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 bg-purple-50/60 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading mb-6 text-gray-800">Nossas Conquistas 🏆</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto retro-text">
              Veja o impacto que já causamos na vida de várias pessoas. Cada número representa uma história de aprendizado! ✨
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {achievementsList.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Reveal key={index} delay={index * 60}>
                  <div className="vintage-card !bg-yellow-100 p-8 text-center rounded-2xl shadow-sm playful-card h-full">
                    <div className={`w-16 h-16 ${stat.bgClass} rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${stat.borderClass}`}>
                      <IconComponent className={`w-8 h-8 ${stat.iconColor}`} />
                    </div>
                    <CountUp value={stat.value} className="text-4xl font-bold text-gray-800 mb-2 vintage-heading" />
                    <p className="text-gray-800 font-bold retro-text text-lg">{stat.title}</p>
                    <p className="text-sm text-gray-600 mt-2 retro-text">{stat.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 bg-pink-600 vignette scroll-mt-24">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl vintage-heading mb-6 text-white">Conheça a Família Hu 👨‍👩‍👧‍👦</h2>
            <p className="text-lg md:text-xl text-white retro-text">
              Três primos unidos por uma paixão pela educação e por ajudar outros. 💕
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreTeam.map((member, index) => (
              <Reveal key={index} delay={index * 120}>
                <Card className="text-center vintage-card bg-pink-100 border-2 border-pink-300 hover:shadow-xl scrapbook-tape playful-card h-full">
                  <CardHeader>
                    <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden bg-pink-200 flex items-center justify-center photo-border">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        width={112}
                        height={112}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl card-emoji">{member.icon}</span>
                      <CardTitle className="text-xl text-gray-800 vintage-heading">{member.name}</CardTitle>
                    </div>
                    <CardDescription className="text-pink-700 handwritten font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 retro-text">{member.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-16 flex flex-col items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-pink-100 text-pink-800 hover:bg-pink-200 text-lg md:text-xl px-10 md:px-16 py-8 h-auto retro-text shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-pink-200 w-full sm:w-auto sm:min-w-[320px]"
              asChild
            >
              <Link href="/membros">
                👥 Meet All Members ✨
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-yellow-100 text-gray-900 hover:bg-yellow-200 text-lg md:text-xl px-10 md:px-16 py-8 h-auto retro-text shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-pink-200 w-full sm:w-auto sm:min-w-[320px]"
              asChild
            >
              <Link href="/voluntariado" className="flex items-center justify-center">
                <Heart className="w-6 h-6 mr-3 shrink-0" />
                <span>Quero Ser Voluntário!</span>
                <Heart className="w-6 h-6 ml-3 shrink-0" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
