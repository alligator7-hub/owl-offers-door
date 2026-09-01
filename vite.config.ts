import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: resolve(__dirname, "app"),
  publicDir: resolve(__dirname, "public"),
  base: "/owl-offers-door/",
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "docs"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
  server: {
    port: 5173,
    open: "/owl-offers-door/",
  },
  preview: {
    port: 4173,
  },
});
