import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Dockerからアクセスできるように
    port: 5173,
    // ホットリロードの設定
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
