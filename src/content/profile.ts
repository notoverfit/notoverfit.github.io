export interface ExternalLink {
  label: string
  href: string
}

export const profile = {
  name: 'Haeohreum Kim',
  tagline: 'trader · quant researcher · sydney',
  links: [{ label: 'github', href: 'https://github.com/notoverfit' }] satisfies ExternalLink[],
  about: [
    'trader and quantitative researcher, based in sydney.',
    'studied computer science at unsw, with a lean towards statistics.',
    'interested in market microstructure, transaction costs and execution.',
    'mostly writing python, r and sql.',
  ],
}
