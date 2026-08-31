"use client"

import { useMemo, useState } from "react"
import { Download, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/reveal"
import { categories, downloadHref, learningSheets } from "@/lib/data/materiais"

/**
 * A parte interativa de /materiais: busca, filtros por categoria e a grid.
 *
 * Vive separada da página para que `app/materiais/page.tsx` continue sendo um
 * server component e possa exportar `metadata` própria — um `"use client"` na
 * página inteira impediria isso.
 */
export function MateriaisBrowser() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const filteredSheets = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return learningSheets.filter((sheet) => {
      const matchesSearch =
        sheet.title.toLowerCase().includes(term) || sheet.description.toLowerCase().includes(term)
      const matchesCategory = selectedCategory === "Todos" || sheet.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <>
    {/* Busca e filtros. Não é sticky de propósito: quem já sabe o material que
        procura filtra aqui e desce direto para os cards — não há motivo para a
        barra ocupar espaço no topo o resto da rolagem. Mesmo fundo das seções
        vizinhas, para não virar uma faixa solta. */}
    <div className="bg-green-50/60 px-4 pb-4">
      <div className="mx-auto w-full max-w-3xl space-y-4">
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar materiais..."
            aria-label="Buscar materiais"
            className="pl-10 bg-white/80 border-pink-300 focus:border-pink-500 focus:ring-pink-200 retro-text text-lg h-12 rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* No celular os filtros rolam na horizontal numa linha só. Empilhados,
              viravam 4 linhas e o header mais a barra grudada comiam 46% da tela.
              A partir de `sm` voltam a quebrar linha e centralizar. */}
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:justify-center sm:overflow-x-visible md:gap-3">
          {categories.map(category => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`shrink-0 retro-text rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-pink-600 hover:bg-pink-700 text-white border-pink-600 scale-105 shadow-md"
                  : "bg-white/60 text-gray-700 border-pink-300 hover:bg-pink-50 hover:text-pink-700 hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 retro-text" aria-live="polite">
          {filteredSheets.length === 0
            ? "Nenhum material encontrado"
            : filteredSheets.length === 1
              ? "1 material encontrado"
              : `${filteredSheets.length} materiais encontrados`}
        </p>
      </div>
    </div>

    <section className="py-16 px-4 bg-green-50/60">
      <div className="container mx-auto max-w-6xl">
        <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSheets.length > 0 ? (
            filteredSheets.map((sheet, index) => {
              const href = downloadHref(sheet.filePath);

              return (
                <Reveal
                  /* A key é só o caminho do arquivo. Antes ela incluía o termo
                     de busca, então cada tecla digitada trocava a key dos 60
                     cards: React desmontava e remontava a grid inteira e
                     recriava 60 IntersectionObservers. A reanimação por troca
                     de categoria vive na key da grid, logo acima. */
                  key={sheet.filePath}
                  delay={Math.min(index, 8) * 60}
                >
                  <Card className="vintage-card scrapbook-tape playful-card hover:shadow-xl h-full">
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs bg-yellow-100 text-gray-700 retro-text">
                            {sheet.level}
                          </Badge>
                          <Badge variant="outline" className="text-xs border-pink-300 text-pink-700 retro-text">
                            {sheet.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl card-emoji">{sheet.icon}</span>
                        <CardTitle className="text-lg text-gray-800 vintage-heading">{sheet.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 retro-text">{sheet.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full vintage-btn retro-text" asChild>
                        <a href={href} download>
                          <Download className="w-4 h-4 mr-2" />
                          Baixar PDF 📥
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-xl text-gray-500 retro-text">Nenhum material encontrado... 😢</p>
              <Button
                variant="link"
                onClick={() => {setSearchTerm(""); setSelectedCategory("Todos")}}
                className="text-pink-600 hover:text-pink-800 retro-text"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>

        <Reveal className="text-center mt-16">
          <p className="inline-block vintage-card rounded-full px-8 py-4 retro-text text-gray-700 text-lg">
            Fique ligado nos materiais futuros! 👀
          </p>
        </Reveal>
      </div>
    </section>
    </>
  )
}
