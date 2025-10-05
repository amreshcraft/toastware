import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import {visualizer} from 'rollup-plugin-visualizer'
import viteImagemin from 'vite-plugin-imagemin'


export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
      include: ['src/**/*', 'src/toast/types/css.d.ts', 'src/toast/types/assets.d.ts', 'src/toast/types/types.ts'],
      exclude: ['node_modules', 'dist','src/App.tsx','src/main.tsx','src/App.css','src/index.css'],
      outDir: 'dist',
    }),
      viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.7, 0.8] },
      svgo: { plugins: [{ removeViewBox: false }] }
    }),
    cssInjectedByJsPlugin(),
  ],
  build: {
  
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Toastware',
      fileName: (format) => `toastware.${format}.js`,
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false
    },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        exports: 'named',
     
      },
    },
    cssCodeSplit: false,
    minify: 'esbuild',
    sourcemap: false,
  },
});


