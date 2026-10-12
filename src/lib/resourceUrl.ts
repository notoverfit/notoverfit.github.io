const SOURCE_BLOB_URL = 'https://github.com/notoverfit/notoverfit.github.io/blob/main/public/resources/'

/**
 * Markdown notes link to GitHub, which renders them (including math and relative images);
 * everything else is served directly by GitHub Pages.
 */
export function resourceUrl(path: string): string {
  if (path.endsWith('.md')) return SOURCE_BLOB_URL + path
  return `${import.meta.env.BASE_URL}resources/${path}`
}
