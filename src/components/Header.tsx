import { profile } from '../content/profile'
import { TextLink } from './TextLink'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <h1 className="header__name">{profile.name}</h1>
      <div className="header__meta">
        <span>{profile.tagline}</span>
        {profile.links.map((link) => (
          <TextLink key={link.href} href={link.href}>
            {link.label} ↗
          </TextLink>
        ))}
      </div>
    </header>
  )
}
