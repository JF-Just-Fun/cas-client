import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : './',
  resolve: {
    alias: {
      '@': '/src',
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://casapi.desiretree.top/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react(), terser()],
});
