# notoverfit.github.io

Personal site, built with React + Vite and deployed to GitHub Pages with [`gh-pages`](https://github.com/tschaub/gh-pages), following [gitname/react-gh-pages](https://github.com/gitname/react-gh-pages).

## Development

```sh
npm install
npm run dev
```

## Editing content

- `src/content/profile.ts`: name, tagline, links and the about section.
- `src/content/resources.ts`: the course list. Each link's `path` is relative to `public/resources/`.
  Markdown files link to GitHub's rendered view; everything else is served from the site.

Before adding a file to `public/resources/`, check it for personal details (name, student ID, email),
including PDF metadata.

## Deploying

```sh
npm run deploy
```

This builds into `dist/` and pushes it to the `gh-pages` branch. One-time setup on GitHub:
**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `gh-pages` / `(root)`**.

Commit and push `main` as well, since the markdown notes are linked from it.
