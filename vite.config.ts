import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "rio-claro-tourism-website--2-";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? `/${repoName}/` : "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
