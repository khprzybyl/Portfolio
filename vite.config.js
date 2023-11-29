import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssImport, tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      routes: path.resolve(__dirname, 'src/routes'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
});
