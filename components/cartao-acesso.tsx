const linhas = [
  { termo: "Materiais para baixar", valor: "Livre" },
  { termo: "Aulas online ao vivo", valor: "Livre" },
  { termo: "Cadastro exigido", valor: "Nenhum" },
  { termo: "Mensalidade", valor: "R$ 0,00" },
  { termo: "Validade", valor: "Para sempre" },
]

/**
 * Cartão de acesso no estilo ficha de biblioteca — usado na home e em /sobre no
 * lugar do antigo painel amarelo com texto solto.
 *
 * Tudo em CSS: moldura polaroid, faixa de cabeçalho, linhas pautadas e um
 * carimbo torto no canto. Nenhuma imagem envolvida, então não há asset para
 * comprimir nem para manter.
 */
export function CartaoAcesso() {
  // `w-full`: dentro de um flex com `items-center` o cartão encolheria até o
  // conteúdo e ficaria mais estreito que o botão embaixo dele.
  return (
    <div className="relative mx-auto w-full max-w-sm rotate-1">
      <div className="vintage-card photo-border playful-card overflow-hidden rounded-lg">
        {/* Faixa do cabeçalho */}
        <div className="bg-pink-600 px-5 py-3 text-center">
          <p className="vintage-heading text-sm tracking-[0.3em] text-white">CARTÃO DE ACESSO</p>
        </div>

        <div className="bg-[#fefdf8] px-6 py-6">
          <p className="handwritten mb-1 text-2xl text-pink-700">Hu&apos;s Your Teacher</p>
          <p className="retro-text mb-5 text-xs uppercase tracking-widest text-gray-500">
            Nº 001 · emitido para você
          </p>

          <dl className="space-y-0">
            {linhas.map((linha) => (
              <div
                key={linha.termo}
                className="flex items-baseline justify-between gap-3 border-b border-dashed border-pink-200 py-2 last:border-b-0"
              >
                <dt className="retro-text text-sm text-gray-600">{linha.termo}</dt>
                <dd className="vintage-heading text-sm text-gray-800">{linha.valor}</dd>
              </div>
            ))}
          </dl>

          {/* A assinatura tambem serve de area de pouso para o carimbo: antes ele
              caia por cima da ultima linha de dados e tapava o valor. */}
          <div className="mt-5 border-t border-pink-200 pt-4">
            <p className="retro-text text-[0.65rem] uppercase tracking-widest text-gray-500">
              Assinatura
            </p>
            <p className="handwritten text-xl text-pink-700">Hu cares? We do.</p>
          </div>
        </div>
      </div>

      {/* Carimbo */}
      <span
        aria-hidden="true"
        className="vintage-heading absolute -bottom-4 -right-3 rotate-[-14deg] rounded-full border-4 border-pink-500 bg-pink-50/90 px-5 py-2 text-xl tracking-widest text-pink-600 shadow-sm"
      >
        GRÁTIS
      </span>
    </div>
  )
}
