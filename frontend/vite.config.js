import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend server
        changeOrigin: true,             // Ensure the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Remove "/api" prefix if backend doesn't expect it
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Correct location for alias
    },
  },
});
