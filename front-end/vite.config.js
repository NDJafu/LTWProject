import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/product": "http://localhost:8060",
      // "/user": "http://localhost:8060",
      "/api/v1/auth": "http://localhost:5000",
      "/api/v1/users": "http://localhost:5000",
      "/api/v1/products": "http://localhost:5000",
      "/api/v1/orders": "http://localhost:5000",
    },
  },
  plugins: [react()],
});
