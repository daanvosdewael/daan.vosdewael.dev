/* eslint sort-keys: 'error' */

import { defineConfig } from 'vite';
import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    },
    plugins: [
        minifyHtml({
            removeAttributeQuotes: false,
        }),
    ],
    publicDir: '../static',
    root: './src',
});
