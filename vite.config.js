/* eslint sort-keys: 'error' */

import { defineConfig } from 'vite';
import { minifyHtml } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    },
    plugins: [
        viteSingleFile(),
        minifyHtml({
            removeAttributeQuotes: false,
        }),
    ],
    publicDir: '../static',
    root: './src',
});
