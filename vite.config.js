import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Add this configuration:
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // <--- a new file we'll create
  },
});
