import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mid-Term-CSJI97/',
  build: {
    outDir: 'dist', // Output directory
    }
});
