import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { Award, ClipboardList } from "lucide-react"
import { sectors } from "@/lib/data/voluntariado"
import { FORMULARIOS, LINK_EXTERNO } from "@/lib/site"

export const metadata = {
  title: "Seja Voluntário",
  description:
    "Junte-se ao Hu's Your Teacher como voluntário em Teaching, Curriculum Development, Communication & Marketing ou Community Engagement. Com certificado de horas complementares.",
}

export default function VoluntariadoPage() {

  return (
    <div className="min-h-screen crayon-scribbles">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-pink-600 vignette text-center">
        <Reveal>
          <Badge className="mb-6 bg-pink-700 text-white border-0 retro-text text-base px-6 py-2">
            Junte-se à Causa 💖
          </Badge>
          <h1 className="text-4xl md:text-6xl vintage-heading text-white mb-8">Seja um voluntário no Hu&apos;s Your Teacher! ✨</h1>
          <p className="text-lg md:text-xl text-white retro-text max-w-4xl mx-auto leading-relaxed mb-6">
            O Hu&apos;s Your Teacher é um projeto sem fins lucrativos dedicado a democratizar o acesso ao aprendizado da língua inglesa. Acreditamos que o inglês é uma ferramenta de oportunidades, educação e conexão global, e nossa missão é torná-lo acessível a todos.
          </p>
          <p className="text-lg md:text-xl text-white retro-text max-w-4xl mx-auto leading-relaxed">
            Se você deseja contribuir com impacto social e fazer parte de uma equipe comprometida com a educação, preencha o formulário abaixo e candidate-se a uma de nossas áreas de atuação!
          </p>
        </Reveal>
      </section>


      {/* Sectors Section */}
      <section className="py-20 px-4 bg-pink-50/60">
        <div className="container mx-auto max-w-6xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Onde você pode atuar? 🎯</h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text max-w-2xl mx-auto">
              Descubra os nossos setores e veja qual combina mais com as suas habilidades e interesses.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sectors.map((sector, index) => (
              <Reveal key={index} delay={index * 100}>
                <Card className={`vintage-card ${sector.color} border-2 ${sector.borderColor} hover:shadow-xl scrapbook-tape playful-card h-full`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl card-emoji">{sector.icon}</span>
                      <CardTitle as="h3" className="text-xl md:text-2xl text-gray-800 vintage-heading">{sector.title}</CardTitle>
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
                          <span className="text-pink-600 mt-1">⭐</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Por que ser voluntário? 💭</h2>
            <p className="text-lg md:text-xl text-gray-700 retro-text mb-4 max-w-2xl mx-auto">
              Ouça o relato de quem já faz a diferença no nosso projeto e veja como essa experiência pode ser transformadora!
            </p>
            <p className="text-lg text-pink-700 handwritten italic mb-10">
              By Teacher Nicole R.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="vintage-card p-4 rounded-2xl mx-auto shadow-xl scrapbook-tape border-2 border-pink-300 max-w-3xl">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center photo-border">
                <video
                  controls
                  preload="metadata"
                  className="w-full h-full object-contain"
                >
                  <source src="/videos/depoimento.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 px-4 bg-blue-50/80">
        <div className="container mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-blue-300 shadow-lg animate-vintage-glow">
              <Award className="w-12 h-12 text-blue-700" />
            </div>
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-8">Certificação e Benefícios 🎓</h2>
            <p className="text-lg md:text-xl text-gray-700 retro-text mb-6 leading-relaxed">
              Nós valorizamos imensamente o tempo e a dedicação de nossos voluntários. Ao fazer parte da nossa equipe, você não só ajuda a transformar a vida de diversos estudantes, mas também desenvolve suas próprias habilidades!
            </p>
          </Reveal>
          <div className="bg-white/60 p-8 rounded-2xl border-2 border-blue-200 text-left max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl vintage-heading text-gray-800 mb-4">Como certificamos o seu auxílio?</h3>
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
        <Reveal>
          <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Pronto para causar impacto? 🚀</h2>
          <p className="text-lg md:text-xl text-gray-700 retro-text max-w-2xl mx-auto mb-10">
            Preencha o nosso formulário de inscrição para voluntários e aguarde o nosso contato. Estamos ansiosos para te conhecer! 💛
          </p>

          <Button
            size="lg"
            className="bg-yellow-300 text-gray-900 hover:bg-yellow-400 text-lg md:text-xl px-8 md:px-12 py-8 h-auto whitespace-normal retro-text shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl"
            asChild
          >
            <a href={FORMULARIOS.voluntario} {...LINK_EXTERNO}>
              <ClipboardList className="w-6 h-6 mr-3 shrink-0" />
              Preencher Formulário de Voluntariado 📝
            </a>
          </Button>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  )
}
