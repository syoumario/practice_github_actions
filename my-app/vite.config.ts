import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },

  base: '/practice_github_actions/',
  build: {
    rollupOptions: {
      external: ['**/*.test.ts', '**/*.test.tsx']
    }
  }
})
