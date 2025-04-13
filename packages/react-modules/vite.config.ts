import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';

const banner = `"use client";import "./index.css";`;

export default defineConfig({
  build: {
    lib: {
      entry: process.env.ENTRY_POINT ?? './src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        banner,
      },
    },
    outDir: './build',
  },
  plugins: [react()],
  css: {
    modules: true,
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});
