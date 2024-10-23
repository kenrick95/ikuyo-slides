import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/slides/ikuyo/',
  
  // https://github.com/vitejs/vite/issues/18164#issuecomment-2365310242
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  
  plugins: [react()],
})
