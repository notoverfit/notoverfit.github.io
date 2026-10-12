import type { ReactNode } from 'react'

interface TextLinkProps {
  href: string
  children: ReactNode
}

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
