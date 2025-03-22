import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/contador/", // <- isso aqui é ESSENCIAL
  plugins: [react()],
});
