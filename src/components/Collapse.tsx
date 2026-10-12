import type { ReactNode } from 'react'

interface CollapseProps {
  id: string
  open: boolean
  children: ReactNode
}

/** Animates height between 0 and the content's natural size via a grid-row transition. */
export function Collapse({ id, open, children }: CollapseProps) {
  return (
    <div id={id} className={`collapse${open ? ' collapse--open' : ''}`} inert={!open}>
      <div className="collapse__inner">{children}</div>
    </div>
  )
}
