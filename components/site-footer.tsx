import Link from "next/link"
import { Logo } from "@/components/logo"
import { CONTATO, LINK_EXTERNO } from "@/lib/site"

const quickLinks = [
  { href: "/materiais", label: "Materiais de Aprendizado 📚" },
  { href: "/aulas", label: "Aulas Online 💻" },
  { href: "/sobre", label: "Sobre Nós 🌟" },
  { href: "/membros", label: "Nossa Equipe 👨‍👩‍👧‍👦" },
  { href: "/voluntariado", label: "Seja Voluntário 💖" },
]

export function SiteFooter() {
  // `relative z-[4]`: sem isso os pseudo-elementos do `.crayon-scribbles`
  // (rabiscos em z-0, véu creme em z-3) pintam por cima do rodapé, que é um
  // bloco não posicionado. Com o z-index o fundo escuro fica chapado.
  return (
    <footer className="relative z-[4] py-16 px-4 bg-gray-800 text-yellow-100">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Logo size="small" />
              <h2 className="text-xl vintage-heading">Hu&apos;s Your Teacher 📚</h2>
            </div>
            <p className="text-yellow-200 retro-text">
              Materiais gratuitos de aprendizado de inglês para todos, em todos os lugares. 🌍
            </p>
          </div>
          <div>
            <h2 className="text-xl vintage-heading mb-6">Links Rápidos 🔗</h2>
            <ul className="space-y-3 text-yellow-200 retro-text">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-yellow-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl vintage-heading mb-6">Contato 📞</h2>
            <p className="text-yellow-200 mb-3 retro-text">Perguntas ou sugestões? 💭</p>
            <a
              href={CONTATO.instagram}
              {...LINK_EXTERNO}
              className="block text-yellow-200 mb-3 retro-text hover:text-yellow-100 transition-colors"
            >
              {CONTATO.instagramHandle} 📸
            </a>
            <a
              href={`mailto:${CONTATO.email}`}
              className="block text-yellow-200 retro-text hover:text-yellow-100 transition-colors"
            >
              {CONTATO.email} 📧
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-yellow-200 retro-text">
          <p>
            &copy; {new Date().getFullYear()} Hu&apos;s Your Teacher. Feito com ❤️ para aprendizes em todos os lugares.
            🌟
          </p>
        </div>
      </div>
    </footer>
  )
}
