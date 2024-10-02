import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist/maplibregl',
        minify: false,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './modules/maplibregl/index.js',
            name:'maplibregl',
            formats: ['iife'],
            fileName: (format) => `[name].js`
        }
    }
})