import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages, set base to '/repo-name/' 
// For custom domain or local preview, use '/'
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure public folder assets are copied
    emptyOutDir: true,
  },
})
