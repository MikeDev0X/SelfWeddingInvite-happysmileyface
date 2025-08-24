import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  assetsInclude: ['**/*.mp3'],
  base: command === 'serve' ? '/' : '/SelfWeddingInvite-happysmileyface/',
  build: {
    outDir: 'dist',
  },
}));