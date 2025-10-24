import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ez_webpage/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
