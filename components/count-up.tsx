"use client"

import { useEffect, useMemo, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

/** Separa "8000+" em prefixo "", número 8000 e sufixo "+". Também cobre "~50". */
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d[\d.,]*)(.*)$/)
  if (!match) return null
  const digits = Number(match[2].replace(/[.,]/g, ""))
  if (!Number.isFinite(digits)) return null
  return { prefix: match[1], target: digits, suffix: match[3] }
}

/**
 * Anima o número de 0 até o valor quando entra na viewport.
 * Valores que não são numéricos são renderizados como estão.
 */
export function CountUp({
  value,
  className,
  duration = 1600,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const parsed = useMemo(() => parseValue(value), [value])
  const { ref, inView } = useInView<HTMLParagraphElement>(0.4)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!parsed || !inView) return

    // Com `prefers-reduced-motion` a duração vai a zero: o primeiro frame já
    // cai no valor final. Assim o setState acontece dentro do rAF, e não
    // sincronamente no corpo do efeito.
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const total = reduzido ? 0 : duration
    const target = parsed.target
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = total === 0 ? 1 : Math.min((now - start) / total, 1)
      // easeOutExpo — sobe rápido e desacelera no fim
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCurrent(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, parsed, duration])

  if (!parsed) {
    return <p className={className}>{value}</p>
  }

  return (
    <p ref={ref} className={className}>
      {parsed.prefix}
      {current.toLocaleString("pt-BR")}
      {parsed.suffix}
    </p>
  )
}
