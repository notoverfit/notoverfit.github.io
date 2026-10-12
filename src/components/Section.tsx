import { useId, useState, type ReactNode } from 'react'
import { Collapse } from './Collapse'
import './Section.css'

interface SectionProps {
  title: string
  collapsible?: boolean
  children: ReactNode
}

export function Section({ title, collapsible = false, children }: SectionProps) {
  const [open, setOpen] = useState(true)
  const contentId = useId()

  if (!collapsible) {
    return (
      <section>
        <h2 className="section__title">{title}</h2>
        {children}
      </section>
    )
  }

  return (
    <section>
      <h2 className="section__title">
        <button
          type="button"
          className="section__toggle"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {title}
          <span className="section__indicator">{open ? '−' : '+'}</span>
        </button>
      </h2>
      <Collapse id={contentId} open={open}>
        {children}
      </Collapse>
    </section>
  )
}
