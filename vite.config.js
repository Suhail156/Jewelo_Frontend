import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',  // important for deployment on Vercel
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
})
