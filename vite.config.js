// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Redirect MUI's styled-engine to the styled-components version:
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
})
