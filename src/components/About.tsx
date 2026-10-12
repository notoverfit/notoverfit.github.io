import { profile } from '../content/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section title="About">
      <ul className="bullet-list">
        {profile.about.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Section>
  )
}
