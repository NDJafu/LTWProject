import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/product": "http://localhost:8060",
      "/user": "http://localhost:8060",
    },
  },
  plugins: [react()],
});
