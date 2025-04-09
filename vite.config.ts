import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrige o __dirname no contexto ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Verifica se está em modo produção (por exemplo, ao rodar `vite build`)
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/MyPortfolio/' : '/', // Base dinâmica
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
    },
  },
});
