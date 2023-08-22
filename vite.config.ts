import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_ROUTER_BASE,
  resolve: {
    alias: {
      '@': '/src',
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://api.yinpo.space/cas',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
});
