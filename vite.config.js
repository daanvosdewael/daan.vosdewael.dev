/* eslint sort-keys: 'error' */

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../dist',
    },
    plugins: [
        viteSingleFile(),
        createHtmlPlugin({
            removeAttributeQuotes: false,
        }),
    ],
    publicDir: '../static',
    root: './src',
});
