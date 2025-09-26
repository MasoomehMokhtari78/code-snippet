import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true }), tailwindcss()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
