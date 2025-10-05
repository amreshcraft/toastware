// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, outDir: 'dist' ,    }),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Toastware',
      fileName: format => `toastware.${format}.js`,
      formats:["cjs","es","umd"]
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        exports: 'named',
      },
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: true,
  },
});
