import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite/modulepreload-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      shorthand: "http://127.0.0.1:8000"
    }
  },
  plugins: [react()],
})
