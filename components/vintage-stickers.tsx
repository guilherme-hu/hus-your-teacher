"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Sticker = {
  emoji: string
  /** Posição em % do contêiner. */
  top: number
  left: number
  /** Multiplicador do parallax — quanto maior, mais o emoji se move ao rolar. */
  depth: number
  delay: number
  size: string
  opacity: number
  animation: "float" | "glow"
  /** Emojis muito perto do centro somem no mobile para não cobrir o texto. */
  mobile?: boolean
}

const stickers: Sticker[] = [
  { emoji: "🌸", top: 8, left: 6, depth: 0.08, delay: 0, size: "text-3xl", opacity: 0.8, animation: "float", mobile: true },
  { emoji: "🦋", top: 14, left: 88, depth: 0.05, delay: 1, size: "text-2xl", opacity: 0.7, animation: "glow", mobile: true },
  { emoji: "🌿", top: 26, left: 22, depth: 0.1, delay: 2, size: "text-2xl", opacity: 0.85, animation: "float" },
  { emoji: "🌊", top: 11, left: 78, depth: 0.07, delay: 0.5, size: "text-3xl", opacity: 0.75, animation: "glow" },
  { emoji: "🍃", top: 38, left: 92, depth: 0.04, delay: 1.5, size: "text-2xl", opacity: 0.7, animation: "float", mobile: true },
  { emoji: "💙", top: 46, left: 10, depth: 0.09, delay: 2.5, size: "text-2xl", opacity: 0.8, animation: "glow", mobile: true },
  { emoji: "🌱", top: 78, left: 12, depth: 0.06, delay: 3, size: "text-3xl", opacity: 0.75, animation: "float", mobile: true },
  { emoji: "🐋", top: 68, left: 86, depth: 0.08, delay: 3.5, size: "text-2xl", opacity: 0.65, animation: "glow" },
  { emoji: "🌳", top: 32, left: 34, depth: 0.05, delay: 4, size: "text-2xl", opacity: 0.7, animation: "float" },
  { emoji: "🦚", top: 42, left: 66, depth: 0.07, delay: 4.5, size: "text-2xl", opacity: 0.8, animation: "glow" },
  { emoji: "🌺", top: 62, left: 26, depth: 0.1, delay: 5, size: "text-3xl", opacity: 0.75, animation: "float" },
  { emoji: "🌀", top: 56, left: 74, depth: 0.04, delay: 5.5, size: "text-2xl", opacity: 0.7, animation: "glow" },
  { emoji: "🌲", top: 52, left: 3, depth: 0.06, delay: 6, size: "text-xl", opacity: 0.6, animation: "float", mobile: true },
  { emoji: "🐠", top: 88, left: 94, depth: 0.09, delay: 6.5, size: "text-xl", opacity: 0.65, animation: "glow", mobile: true },
  { emoji: "🦜", top: 72, left: 96, depth: 0.05, delay: 7, size: "text-xl", opacity: 0.7, animation: "float" },
]

export function VintageStickers() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const items = Array.from(container.children) as HTMLElement[]
    let frame = 0

    const update = () => {
      frame = 0
      const offset = window.scrollY
      items.forEach((item) => {
        const depth = Number(item.dataset.depth ?? 0)
        item.style.transform = `translate3d(0, ${offset * depth}px, 0)`
      })
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={containerRef} aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stickers.map((sticker, index) => (
        <span
          key={index}
          data-depth={sticker.depth}
          className={cn(
            "absolute will-change-transform select-none",
            sticker.size,
            sticker.mobile ? "" : "hidden md:block",
          )}
          style={{
            top: `${sticker.top}%`,
            left: `${sticker.left}%`,
            opacity: sticker.opacity,
          }}
        >
          <span
            className={cn("block", sticker.animation === "float" ? "animate-gentle-float" : "animate-vintage-glow")}
            style={{ animationDelay: `${sticker.delay}s` }}
          >
            {sticker.emoji}
          </span>
        </span>
      ))}
    </div>
  )
}
