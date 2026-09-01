import Link from "next/link"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { CartaoAcesso } from "@/components/cartao-acesso"
import { frentes, linhaDoTempo, principios } from "@/lib/data/sobre"
import { FORMULARIOS, LINK_EXTERNO } from "@/lib/site"

export const metadata = {
  title: "Sobre o projeto",
  description:
    "Como o Hu's Your Teacher começou numa sala de igreja em São Paulo em 2022 e virou uma plataforma de inglês gratuita — a história, as três frentes do projeto e como ensinamos.",
}

export default function SobrePage() {
  return (
    <div className="min-h-screen crayon-scribbles">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 px-4 bg-pink-600 vignette text-center">
        <Reveal>
          <Badge className="mb-6 bg-pink-800 text-white border-0 retro-text text-base px-6 py-2">
            Nossa História 📖
          </Badge>
          <h1 className="text-4xl md:text-6xl vintage-heading text-white mb-8">
            De uma sala de igreja para o Brasil inteiro 🌏
          </h1>
          <p className="text-lg md:text-xl text-white retro-text max-w-3xl mx-auto leading-relaxed">
            O Hu&apos;s Your Teacher nasceu de uma pergunta incômoda: por que aprender inglês — que abre
            tanta porta para estudar e trabalhar — ainda depende do quanto cada pessoa pode pagar? 💭
          </p>
        </Reveal>
      </section>

      {/* Linha do tempo */}
      <section className="py-24 px-4 bg-green-50/60">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Como tudo começou ✨</h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text">
              Não começou como um site. Começou com uma professora, uma sala e alguns alunos.
            </p>
          </Reveal>

          <ol className="relative space-y-8 border-l-2 border-dashed border-pink-300 pl-6 md:pl-10">
            {linhaDoTempo.map((marco, index) => (
              <li key={marco.quando}>
                <Reveal delay={index * 80}>
                  {/* Bolinha na linha do tempo */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[21px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-pink-300 bg-yellow-100 text-lg shadow-sm"
                  >
                    {marco.icon}
                  </span>
                  <div className="vintage-card playful-card ml-6 rounded-2xl p-6 md:p-8">
                    <p className="handwritten text-lg text-pink-700">{marco.quando}</p>
                    <h3 className="vintage-heading mb-3 text-2xl text-gray-800">{marco.titulo}</h3>
                    <p className="retro-text leading-relaxed text-gray-700">{marco.texto}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* As três frentes */}
      <section className="py-24 px-4 bg-blue-50/60">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Em que a gente se apoia 🌈</h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text max-w-2xl mx-auto">
              Disponibilizar material era só o começo. Para democratizar de verdade, o projeto anda em três pernas.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frentes.map((frente, index) => (
              <Reveal key={frente.titulo} delay={index * 100}>
                <Card className={`h-full border-2 ${frente.bg} ${frente.borda} scrapbook-tape playful-card`}>
                  <CardHeader>
                    <span className="card-emoji mb-2 block text-4xl" aria-hidden="true">
                      {frente.icon}
                    </span>
                    <CardTitle as="h3" className="vintage-heading text-xl text-gray-800">
                      {frente.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="retro-text leading-relaxed text-gray-700">{frente.texto}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-8">Para quem é 🎒</h2>
              <p className="retro-text mb-6 text-lg leading-relaxed text-gray-700">
                Crianças, adolescentes e jovens que querem aprender inglês e não têm como pagar um curso
                particular. Os materiais são pensados com carinho para o público infantil — mas funcionam
                bem para gente de qualquer idade. 🌟
              </p>
              <p className="retro-text text-lg leading-relaxed text-gray-700">
                Não existe restrição de renda, gênero, origem ou cidade. Quem quiser aprender, entra. Já demos
                aula até para uma estudante que morava numa instituição de acolhimento — é exatamente para
                esses lugares que o acesso gratuito precisa chegar. 💛
              </p>
            </Reveal>

            <Reveal delay={150}>
              <CartaoAcesso />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Como ensinamos */}
      <section className="py-24 px-4 bg-purple-50/60">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Como a gente ensina 📝</h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text max-w-2xl mx-auto">
              Inglês não se aprende decorando regra. Aprende-se usando.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {principios.map((principio, index) => (
              <Reveal key={principio.titulo} delay={index * 80}>
                <div className="vintage-card playful-card h-full rounded-2xl p-8">
                  <span className="card-emoji mb-3 block text-3xl" aria-hidden="true">
                    {principio.icon}
                  </span>
                  <h3 className="vintage-heading mb-3 text-xl text-gray-800">{principio.titulo}</h3>
                  <p className="retro-text leading-relaxed text-gray-700">{principio.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A história do restaurante */}
      <section className="py-24 px-4 bg-pink-50/60">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">
              Uma história que resume tudo 💬
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="vintage-card scrapbook-tape playful-card rounded-2xl border-2 border-pink-300 p-8 md:p-12">
              <p className="retro-text mb-6 text-lg leading-relaxed text-gray-700">
                Uma vez, nos convidaram para ensinar inglês a sete funcionários de um restaurante. Eles
                queriam atender clientes estrangeiros com mais segurança.
              </p>
              <p className="retro-text mb-6 text-lg leading-relaxed text-gray-700">
                Por dois meses, adaptamos tudo para a realidade deles: atendimento, anotar pedido, vocabulário
                de cozinha e de salão. Para aquelas pessoas, inglês não era matéria extra — era ferramenta de
                trabalho. 🍽️
              </p>
              <p className="handwritten text-xl leading-relaxed text-pink-700">
                Para a gente, foi a prova de que esse material pode ir muito além de quem a gente imaginou lá
                no começo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-pink-600 vignette text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl vintage-heading text-white mb-6">Bora fazer parte? 🚀</h2>
          <p className="retro-text mx-auto mb-12 max-w-2xl text-lg md:text-xl text-white">
            Dá para começar hoje: baixando um material, entrando numa aula ou ajudando a ensinar. 💕
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
            <Button variant="blush" size="cta" asChild>
              <Link href="/materiais">📚 Ver os materiais</Link>
            </Button>
            <Button variant="sunny" size="cta" asChild>
              <a href={FORMULARIOS.aluno} {...LINK_EXTERNO}>
                ✏️ Quero ser aluno
              </a>
            </Button>
            <Button variant="blush" size="cta" asChild>
              <Link href="/voluntariado" className="flex items-center justify-center">
                <Heart className="mr-3 h-5 w-5 shrink-0" />
                <span>Quero ser voluntário</span>
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  )
}
