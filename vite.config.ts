import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  preview: {
    allowedHosts: ["www.evan-sphere.com"], 
  },
});
