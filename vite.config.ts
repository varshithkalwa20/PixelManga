import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      "pixelmanga.onrender.com",
      "localhost",
      "127.0.0.1",
    ],
  },
  preview: {
    port: 8080,
    allowedHosts: [
      "pixelmanga.onrender.com",
      "localhost",
      "127.0.0.1",
    ],
  },
  plugins: [react()], // ✅ no mode check, always include plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
