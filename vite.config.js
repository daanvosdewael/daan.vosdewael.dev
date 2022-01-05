/* eslint sort-keys: 'error' */

import { defineConfig } from 'vite';
import { minifyHtml } from 'vite-plugin-html';

export default defineConfig({
    build: {
        outDir: '../dist',
    },
    plugins: [
        minifyHtml({
            removeAttributeQuotes: false,
        }),
    ],
    root: './src',
});
