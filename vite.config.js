import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GoDaddy hosting serves the site from the domain root.
  // GitHub Pages (via the deploy workflow) needs the repo subpath instead.
  base: process.env.GH_PAGES === 'true' ? '/GVN-websites/' : '/',
})
