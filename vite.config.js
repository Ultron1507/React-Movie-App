import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/moiveapp/", // Replace with your repository name
  build: {
    outDir: "dist",
  },
});
