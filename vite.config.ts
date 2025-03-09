import { defineConfig } from 'vitest/config';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [!process.env.VITEST && reactRouter(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./app/test/setup.ts'],
    coverage: {
      include: ['**/*.tsx'],
      exclude: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx', 'app/__tests__/setup.ts'],
    },
  },
});
