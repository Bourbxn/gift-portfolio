import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/portfolio-gift/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    open: true,
  },
});
