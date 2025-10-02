import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.jsx',  // tumhara library entry point
      name: 'Toastware',        // global var name for UMD build
      fileName: (format) => `toastware.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
