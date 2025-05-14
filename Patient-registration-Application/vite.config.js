import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'], 
  },
  build: {
    target: 'esnext', 
    rollupOptions: {
      output: {
        manualChunks: {
          wasm: ['@electric-sql/pglite'], 
        },
      },
    },
  },
})
