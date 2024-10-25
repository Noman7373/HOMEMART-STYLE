import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Provide an empty object for process.env
  },
  resolve: {
    alias: {
      // Add aliases for Node.js built-ins
      util: require.resolve('util'),
    },
  },
});

