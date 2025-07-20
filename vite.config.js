import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/ev-olutionEV/',   // <-- Set your repo name here
  plugins: [react()],
})
