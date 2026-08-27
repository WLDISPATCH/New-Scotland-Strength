import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssr: {
    // Bundle dependencies into the prerender server bundle so Node's ESM loader
    // doesn't choke on CommonJS packages (e.g. react-helmet-async) left external.
    noExternal: true,
  },
});
