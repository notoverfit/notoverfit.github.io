import type { ReactNode } from 'react'

const STAGGER_MS = 100

interface FadeUpProps {
  /** Position in the page's reveal sequence; later items appear later. */
  order: number
  children: ReactNode
}

export function FadeUp({ order, children }: FadeUpProps) {
  return (
    <div className="fade-up" style={{ animationDelay: `${order * STAGGER_MS}ms` }}>
      {children}
    </div>
  )
}
