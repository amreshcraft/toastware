import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      include: ['src/**/*', 'src/toast/types/css.d.ts', 'src/toast/types/assets.d.ts', 'src/toast/types/types.ts'],
      exclude: ['node_modules', 'dist','src/App.tsx','src/main.tsx','src/App.css','src/index.css'],
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Toastware',
      fileName: (format) => `toastware.${format}.js`,
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css';
          }
          return '[name].[ext]'; // Always return a string
        },
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: true,
  },
});