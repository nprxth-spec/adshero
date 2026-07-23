import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'virtual:content': path.resolve(__dirname, './src/content/data.ts'),
      '@': path.resolve(__dirname, './src')
    }
  }
});
