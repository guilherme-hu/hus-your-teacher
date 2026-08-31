import type { Metadata, Viewport } from 'next'
import { Caveat } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { BASE_URL } from '@/lib/site'
import './globals.css'

/*
 * A classe `.handwritten` dependia de "Brush Script MT", que não existe em
 * Android nem Linux — na maioria dos celulares a tagline caía para serif comum.
 * A Caveat vem pelo next/font: é baixada no build e servida do próprio domínio,
 * sem requisição a terceiros e sem layout shift.
 */
const caveat = Caveat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-handwritten',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hu's Your Teacher — Materiais de inglês gratuitos",
    template: "%s | Hu's Your Teacher",
  },
  description:
    'Projeto sem fins lucrativos com materiais de inglês 100% gratuitos para download e aulas online ao vivo. Hu cares? We do.',
  keywords: ['inglês grátis', 'material de inglês', 'aula de inglês online', 'aprender inglês', 'PDF inglês'],
  authors: [{ name: "Hu's Your Teacher" }],
  openGraph: {
    title: "Hu's Your Teacher — Materiais de inglês gratuitos",
    description:
      'Materiais de inglês 100% gratuitos para download e aulas online ao vivo. Sem barreiras, só aprendizado.',
    siteName: "Hu's Your Teacher",
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/logo.jpg', width: 800, height: 800, alt: "Hu's Your Teacher" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hu's Your Teacher — Materiais de inglês gratuitos",
    description: 'Materiais de inglês 100% gratuitos para download e aulas online ao vivo.',
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#f8b4cb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /* `suppressHydrationWarning`: o script abaixo põe `class="js"` no <html> antes
       do React hidratar, então o HTML do servidor nunca bate com o do cliente.
       Sem isso, o React registra um erro de hidratação em toda page load. */
    <html lang="pt-BR" className={caveat.variable} suppressHydrationWarning>
      <head>
        {/*
          Marca que o reveal on scroll pode entrar em ação. A classe só é
          adicionada se o navegador tiver IntersectionObserver — sem ele o CSS
          mantém tudo visível, sem precisar de nenhum estado de React.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if ('IntersectionObserver' in window) document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
