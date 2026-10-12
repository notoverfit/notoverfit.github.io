import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // A GitHub Pages *user* site (notoverfit.github.io) is served from the domain root.
  base: '/',
})
