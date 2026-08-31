import Image from 'next/image'

const dimensions = {
  small: { width: 32, height: 32 },
  default: { width: 40, height: 40 },
  large: { width: 60, height: 60 },
}

/**
 * Logo do header e do rodapé.
 *
 * Sem `priority` de propósito: com a otimização de imagens ligada o arquivo sai
 * com ~1 KB, e nenhuma página tem este logo como elemento LCP (na home o LCP é o
 * logo grande do hero, que tem `priority` próprio em `app/page.tsx`). Marcar
 * `priority` aqui só gerava um <link rel="preload"> de um candidato do srcset que
 * o navegador acabava não usando — o console avisava sobre isso.
 */
export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const { width, height } = dimensions[size]

  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width, height }}>
        <Image
          src="/images/logo.jpg"
          alt="Hu's Your Teacher Logo"
          fill
          sizes={`${Math.max(width, height)}px`}
          className="object-cover rounded-sm"
        />
      </div>
    </div>
  )
}
