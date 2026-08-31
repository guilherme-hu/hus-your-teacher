import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { areas, coreTeam, type Member } from "@/lib/data/equipe"
import { Heart } from "lucide-react"
import { CONTATO, LINK_EXTERNO } from "@/lib/site"

export const metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça os voluntários por trás do Hu&apos;s Your Teacher — Teaching, Curriculum Development, Communication & Marketing e Outreach.",
}


function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="w-full h-full text-center border-0 hover:shadow-2xl scrapbook-tape playful-card overflow-hidden bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200">
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
          <span className="text-2xl card-emoji">{member.icon}</span>
          <CardTitle className="text-lg text-gray-800 vintage-heading">{member.name}</CardTitle>
        </div>
        <CardDescription className="text-rose-700 handwritten font-semibold text-md">{member.role}</CardDescription>
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
    <div className="min-h-screen crayon-scribbles">
      <SiteHeader />

      {/* Page Hero */}
      <section className="py-20 px-4 bg-pink-600 vignette text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl vintage-heading text-white mb-6">Nossa Família 👨‍👩‍👧‍👦</h1>
          <p className="text-lg md:text-xl text-white retro-text max-w-2xl mx-auto">
            Conheça todas as pessoas incríveis que tornam o Hu&apos;s Your Teacher possível. Cada membro traz algo único
            ao projeto. 💕
          </p>
        </Reveal>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 bg-pink-50/60">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="text-center mb-12">
            <Badge className="mb-4 bg-pink-600 text-white border-0 retro-text px-6 py-2 text-lg">
              ⭐ Core Team
            </Badge>
            <p className="text-gray-600 retro-text mt-4">Os fundadores do projeto, responsáveis pela liderança macro do projeto.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {coreTeam.map((member, index) => (
              <Reveal key={index} delay={index * 120}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Area Sections */}
      <section className="py-16 px-4 bg-white/40">
        <div className="container mx-auto max-w-6xl space-y-20">
          {areas.map((area) => (
            <div key={area.label}>
              <Reveal className="text-center mb-10">
                {/* O rótulo da área é um h2 de verdade — antes era só um Badge,
                    então não havia como navegar entre as áreas por heading. */}
                <h2>
                  <Badge className="mb-4 bg-pink-600 text-white border-0 retro-text text-base px-6 py-2">
                    {area.icon} {area.label}
                  </Badge>
                </h2>
                {area.description && (
                  <p className="text-gray-600 retro-text mt-3 max-w-xl mx-auto">{area.description}</p>
                )}
              </Reveal>

              {area.subareas ? (
                <div className="space-y-12">
                  {area.subareas.map((subarea) => (
                    <div key={subarea.label}>
                      <Reveal className="text-center mb-8">
                        <h3 className="font-semibold text-pink-600 retro-text">{subarea.label}</h3>
                        {subarea.description && (
                          <p className="text-gray-600 retro-text max-w-2xl mx-auto">{subarea.description}</p>
                        )}
                      </Reveal>
                      {subarea.members.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                          {subarea.members.map((member, index) => (
                            <Reveal key={index} delay={index * 80} className="w-full">
                              <MemberCard member={member} />
                            </Reveal>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-gray-500 retro-text italic">Em breve... 🌱</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : area.members && area.members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                  {area.members.map((member, index) => (
                    <Reveal key={index} delay={index * 80} className="w-full">
                      <MemberCard member={member} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 retro-text italic">Em breve... 🌱</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-pink-600 vignette text-center">
        <h2 className="text-3xl md:text-4xl vintage-heading text-white mb-6">Quer fazer parte? 🌟</h2>
        <p className="text-white retro-text text-lg mb-8 max-w-xl mx-auto">
          Adoraríamos ter você como voluntário! Acesse nossa página de voluntariado para saber mais, ou entre em contato com a gente por email ou Instagram! 💌
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
          <Button
            variant="sunny" size="cta"
            asChild
          >
            <Link href="/voluntariado" className="flex items-center justify-center">
              <Heart className="w-5 h-5 mr-3 shrink-0" />
              <span>Saiba como ser Voluntário!</span>
              <Heart className="w-5 h-5 ml-3 shrink-0" />
            </Link>
          </Button>
          <Button
            variant="blush" size="cta"
            asChild
          >
            <a href={`mailto:${CONTATO.email}`}>{CONTATO.email} 📧</a>
          </Button>
          <Button
            variant="blush" size="cta"
            asChild
          >
            <a href={CONTATO.instagram} {...LINK_EXTERNO}>
              📸 {CONTATO.instagramHandle}
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

