"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Um IntersectionObserver por threshold, compartilhado por todos os elementos.
 *
 * Antes cada `<Reveal>` criava o seu: em /materiais isso dava 62 observers na
 * mesma página. Agora existe um por valor de threshold, e cada elemento entra
 * como mais um alvo dele.
 *
 * A checagem de suporte a IntersectionObserver vive no script inline do
 * `app/layout.tsx`: sem suporte, a classe `js` não é adicionada ao <html> e o
 * CSS deixa tudo visível — não há estado de React envolvido.
 */
const observers = new Map<number, IntersectionObserver>()
const callbacks = new WeakMap<Element, () => void>()

function observerFor(threshold: number) {
  let observer = observers.get(threshold)
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        callbacks.get(entry.target)?.()
        callbacks.delete(entry.target)
        self.unobserve(entry.target)
      }
    },
    { threshold, rootMargin: "0px 0px -40px 0px" },
  )
  observers.set(threshold, observer)
  return observer
}

/** Dispara uma única vez, quando o elemento entra na viewport. */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || inView) return
    if (typeof IntersectionObserver === "undefined") return

    const observer = observerFor(threshold)
    callbacks.set(node, () => setInView(true))
    observer.observe(node)

    return () => {
      callbacks.delete(node)
      observer.unobserve(node)
    }
  }, [threshold, inView])

  return { ref, inView }
}
