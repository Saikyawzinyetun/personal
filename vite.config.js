import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  plugins: [react()],
  base: '/personal/', // Replace EXACTLY with your repo name
});
