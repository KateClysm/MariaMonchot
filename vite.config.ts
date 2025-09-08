// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: 'https://KateClysm.github.io/MariaMonchot/'
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Reemplazo de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: 'https://KateClysm.github.io/MariaMonchot/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // '@' apunta a src
    },
  },
});