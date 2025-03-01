import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rewriter } from 'json-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target:'http://localhost:5000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
})
