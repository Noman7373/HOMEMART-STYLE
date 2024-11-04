import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "module";
import envCompatible from "vite-plugin-env-compatible";

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this is set
  },
  define: {
    "process.env": {}, // Provide an empty object for process.env
  },
  resolve: {
    alias: {
      // Add aliases for Node.js built-ins
      util: require.resolve("util"),
    },
  },
});
