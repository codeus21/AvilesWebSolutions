import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from any network interface
    port: 5173, // Default Vite port
    historyApiFallback: true, // Enable fallback routing for SPA
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
