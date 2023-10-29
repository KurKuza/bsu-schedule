import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  // preview: {
  //   host: 'localhost',
  //   port: 5173,
  //   strictPort: true,
  //   headers: {
  //     'Access-Control-Allow-Origin': 'http://localhost:5173',
  //     'Access-Control-Allow-Headers': 'http://localhost:5173',
  //   },
  // },
  server: {
    proxy: {
      '/api': {
        target: 'https://beluni.ru/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, 'https://beluni.ru/'),
      },
    },
    // proxy: {
    //   '^/(bsu|schedule)': { target: 'https://beluni.ru' },
    // },
    // headers: {
    //   // 'Cross-Origin-Embedder-Policy': 'require-corp',
    //   // 'Cross-Origin-Opener-Policy': 'cross-origin',
    //   // 'Cross-Origin-Resource-Policy': 'cross-origin',
    //   // 'Access-Control-Allow-Headers': 'cross-origin',
    //   'Access-Control-Allow-Origin': 'http://localhost:5173',
    //   'Access-Control-Allow-Headers': 'http://localhost:5173',
    // },
  },
});
