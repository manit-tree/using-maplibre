import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist/maplibregl',
        minify: true,
        sourcemap: true,
        emptyOutDir: true,   

        lib: {
            entry: './modules/maplibregl/index.js',
            name:'maplibregl',
            formats: ['iife','esm'],
            fileName: (format) => `[name].[format].min.js`
        }
    }
})