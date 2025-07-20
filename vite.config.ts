import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bkd-dotcom.github.io/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
});
