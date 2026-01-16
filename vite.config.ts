import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Forzamos la entrada explícita para evitar errores de resolución en entornos CI/CD
      input: './index.html',
    },
  },
  server: {
    port: 3000,
    host: true
  }
});