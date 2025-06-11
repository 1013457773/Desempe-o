import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,         // Puerto fijo
    strictPort: true,   // No permite que Vite cambie el puerto automáticamente
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Puerto donde corre JSON Server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
