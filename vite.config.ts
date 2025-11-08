import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",           // listen on all interfaces (IPv6 + IPv4)
    port: 8080,
    allowedHosts: [
      "pixelmanga.onrender.com", // ✅ allow your Render domain
      "localhost",               // optional for local dev
      "127.0.0.1",               // optional for local dev
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
