// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },
  base: '/Dinas-Perikanan-Profile/', // Sesuaikan dengan nama repositori Anda
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});
