import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { comoFunciona, depoimento, faq, galeria, turmas } from "@/lib/data/aulas"
import { FORMULARIOS, LINK_EXTERNO } from "@/lib/site"

export const metadata = {
  title: "Aulas online",
  description:
    "Aulas de inglês online, ao vivo e gratuitas, uma vez por semana, com os materiais do Hu's Your Teacher. Horários, fotos das turmas e as perguntas mais comuns.",
}

export default function AulasPage() {
  return (
    <div className="min-h-screen crayon-scribbles">
      <SiteHeader />

      {/* Hero */}
      <section className="py-20 px-4 bg-pink-600 vignette text-center">
        <Reveal>
          <Badge className="mb-6 bg-pink-800 text-white border-0 retro-text text-base px-6 py-2">
            Aulas ao vivo 💻
          </Badge>
          <h1 className="text-4xl md:text-6xl vintage-heading text-white mb-8">
            Uma aula por semana, de graça, de onde você estiver 🌎
          </h1>
          <p className="text-lg md:text-xl text-white retro-text max-w-3xl mx-auto leading-relaxed">
            Material sozinho não ensina ninguém a falar. Por isso as aulas são ao vivo: dá para
            perguntar, errar, praticar e ser corrigido por alguém que se importa. 💛
          </p>
        </Reveal>
      </section>

      {/* Como funcionam */}
      <section className="py-24 px-4 bg-green-50/60">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">
              Como funcionam as aulas 🗓️
            </h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text max-w-2xl mx-auto">
              Sem pegadinha, sem letra miúda. É isso aqui:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {comoFunciona.map((item) => (
              <Reveal key={item.titulo}>
                <div className="vintage-card playful-card h-full rounded-2xl p-8">
                  <span className="card-emoji mb-3 block text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="vintage-heading mb-3 text-xl text-gray-800">{item.titulo}</h3>
                  <p className="retro-text leading-relaxed text-gray-700">{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-24 px-4 bg-blue-50/60">
        <div className="container mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">Horários 🕐</h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text mb-12 max-w-2xl mx-auto">
              As turmas em andamento agora. Novas turmas abrem a cada semestre.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col items-center gap-6">
              {turmas.map((turma) => (
                <li key={turma.nome} className="w-full max-w-md">
                  <div className="vintage-card playful-card scrapbook-tape rounded-2xl border-2 border-pink-300 p-8">
                    <div className="mb-3 flex items-center justify-center gap-3">
                      <Clock className="h-6 w-6 shrink-0 text-pink-600" />
                      <h3 className="vintage-heading text-2xl text-gray-800">{turma.nome}</h3>
                    </div>
                    <p className="retro-text text-lg text-gray-700">
                      {turma.dia}, {turma.horario}
                    </p>
                    <p className="handwritten mt-2 text-lg text-pink-700">nível {turma.nivel}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">
              Um pouco das nossas aulas 📸
            </h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text max-w-2xl mx-auto">
              Da mesa de casa ao banco do carro — tem gente aprendendo inglês de todo jeito.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {galeria.map((foto, index) => (
              <Reveal key={foto.src}>
                <figure
                  className={`photo-border playful-card overflow-hidden rounded-lg ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Acompanhamento individual */}
      <section className="py-24 px-4 bg-yellow-100/70">
        <div className="container mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="card-emoji mb-4 text-5xl" aria-hidden="true">
              🧭
            </p>
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">
              Não consegue no horário da turma?
            </h2>
            <p className="retro-text mb-6 text-lg md:text-xl leading-relaxed text-gray-700">
              Também existe o <strong>acompanhamento individual</strong>: uma monitoria remota e
              assíncrona, para quem não consegue participar das aulas ou quer encarar as atividades
              mais difíceis sem ficar sem ninguém para tirar dúvidas.
            </p>
            <p className="retro-text text-lg leading-relaxed text-gray-700">
              A gente te encaminha para uma Teacher que responde suas dúvidas sobre lições, slides e
              atividades do site — e pode montar com você um plano de estudos no seu próprio ritmo.
              Para participar, marque <strong>&quot;acompanhamento individual&quot;</strong> no
              formulário de inscrição. ✨
            </p>
          </Reveal>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-24 px-4 bg-pink-50/60">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800">
              Quem já está com a gente 💬
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <figure className="vintage-card scrapbook-tape playful-card rounded-2xl border-2 border-pink-300 p-8 md:p-12">
              <blockquote className="retro-text text-lg leading-relaxed text-gray-700">
                &ldquo;{depoimento.texto}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="handwritten text-xl text-pink-700">— {depoimento.autora}</p>
                <p className="retro-text text-sm text-gray-500">{depoimento.turma}</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-purple-50/60">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl vintage-heading text-gray-800 mb-6">
              Perguntas frequentes 🤔
            </h2>
            <p className="text-lg md:text-xl text-gray-600 retro-text">
              Ficou alguma dúvida? Provavelmente está aqui embaixo.
            </p>
          </Reveal>

          <div className="space-y-4">
            {faq.map((item) => (
              <Reveal key={item.pergunta}>
                {/* `details`/`summary` nativos: acordeão acessível sem JS e sem lib. */}
                <details className="vintage-card group rounded-2xl border-2 border-pink-200 px-6 py-5 open:border-pink-400">
                  <summary className="vintage-heading flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-gray-800 marker:content-none">
                    {item.pergunta}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-2xl text-pink-600 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="retro-text mt-4 leading-relaxed text-gray-700">{item.resposta}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-pink-600 vignette text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl vintage-heading text-white mb-6">
            Bora começar? 🚀
          </h2>
          <p className="retro-text mx-auto mb-12 max-w-2xl text-lg md:text-xl text-white">
            Preencha o formulário e a gente te coloca em contato com a Teacher da sua turma. 💕
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
            <Button variant="sunny" size="cta" asChild>
              <a href={FORMULARIOS.aluno} {...LINK_EXTERNO}>
                ✏️ Quero me inscrever
              </a>
            </Button>
            <Button variant="blush" size="cta" asChild>
              <Link href="/materiais">📚 Ver os materiais das aulas</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  )
}
