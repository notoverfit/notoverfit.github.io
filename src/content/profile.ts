export interface ExternalLink {
  label: string
  href: string
}

export const profile = {
  name: 'haeohreum kim',
  tagline: 'trading · quant research · sydney',
  links: [{ label: 'github', href: 'https://github.com/notoverfit' }] satisfies ExternalLink[],
  about: [
    'trader and quantitative researcher, based in sydney.',
    'computer science @ unsw',
    'interested in markets, machine learning and language models.'
  ],
}
