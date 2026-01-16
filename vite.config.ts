import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Al estar los archivos en la raíz, no necesitamos configurar rollupOptions.input manualmente.
  // Vite encontrará el index.html por defecto.
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    host: true,
    port: 3000
  }
});