import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base:'/Solution',
  plugins: [vue()],
   resolve: {
    alias: {
      '@': '/src'
    }
  }
})
