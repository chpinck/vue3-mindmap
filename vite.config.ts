import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import stringHash from 'string-hash'
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  },
  plugins: [vue(), ViteMinifyPlugin({})],
  base: '/vue3-mindmap/',
  build: {
    target: 'esnext',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'enurm-vue3-mindmap',
      // the proper extensions will be added
      // fileName: 'enurm-vue3-mindmap'
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const f = filename.split('?')[0].split('.')[0]
        const file = path.basename(f)
        const hash = stringHash(css).toString(36).substr(0, 5);
        return `${file}_${name}_${hash}`
      }
    }
  }
})
