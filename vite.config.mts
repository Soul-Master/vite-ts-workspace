import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
  },
  resolve: { 
    alias: { 
      '@': '/src',
      'component-a': '/packages/component-a',
      'component-b': '/packages/component-b',
      'component-c': '/packages/component-c',
    },
  },
  build: {
    outDir: './dist',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
