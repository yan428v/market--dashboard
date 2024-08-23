import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    esbuild: {
        supported: {
            'top-level-await': true
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            target: 'esnext'
        }
    },
    build: {
        target: 'esnext'
    },
    plugins: [
        react(),
    ]});
