import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { MateriaisBrowser } from "@/components/materiais-browser"

export const metadata = {
  title: "Todos os materiais",
  description:
    "60 materiais de inglês para baixar de graça: gramática, vocabulário, leitura, escrita, atividades e planners. Sem cadastro.",
}

export default function MateriaisPage() {
  return (
    <div className="min-h-screen crayon-scribbles">
      <SiteHeader />

      <section className="py-12 px-4 bg-green-50/60">
        <div className="container mx-auto max-w-6xl">
          <Button variant="outline" asChild className="border-pink-400 text-pink-800 hover:bg-pink-50 retro-text mb-10">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Início
            </Link>
          </Button>

          <Reveal className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl vintage-heading mb-6 text-gray-800">Todos os Materiais 📚</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto retro-text">
              Aqui você encontra todos os materiais de aprendizado disponíveis. Baixe, imprima e comece a aprender hoje! 🌟
            </p>
          </Reveal>
        </div>
      </section>

      <MateriaisBrowser />

      <SiteFooter />
    </div>
  )
}
