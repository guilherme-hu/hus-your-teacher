"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

type RevealProps = {
  children: ReactNode
  /** Atraso em ms — use o índice do item para cascatear os cards. */
  delay?: number
  className?: string
}

/**
 * Faz o conteúdo surgir suavemente quando entra na viewport.
 * Sem JS o conteúdo aparece normalmente (ver `.reveal` / `html.js` em globals.css).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "reveal-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
