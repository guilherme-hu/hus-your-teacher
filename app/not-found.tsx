import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Página não encontrada",
}

export default function NotFound() {
  return (
    <div className="min-h-screen crayon-scribbles flex flex-col">
      <SiteHeader />

      <section className="flex-1 py-24 px-4 flex items-center">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="text-7xl mb-6" aria-hidden="true">
            🔍
          </p>
          <h1 className="text-4xl md:text-6xl vintage-heading mb-6 text-gray-800">
            Essa página sumiu do caderno
          </h1>
          <p className="text-lg md:text-xl text-gray-600 retro-text mb-10 max-w-lg mx-auto">
            O link pode estar errado ou a página pode ter mudado de lugar. Que tal começar pelos
            materiais? Todos continuam gratuitos. 💛
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="vintage" size="cta" asChild>
              <Link href="/materiais">📚 Ver os materiais</Link>
            </Button>
            <Button variant="blush" size="cta" asChild>
              <Link href="/">🏠 Voltar para o início</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
