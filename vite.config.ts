import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      include: ['**/*.tsx'],
      exclude: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx', 'src/__tests__/setup.ts'],
    },
  },
});
