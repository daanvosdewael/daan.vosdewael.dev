import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: '../dist',
	},
	plugins: [
		createHtmlPlugin(),
		sitemap({
			hostname: 'https://daan.vosdewael.dev',
			robots: [
				{
					disallow: '/',
					userAgent: 'GPTBot',
				},
				{
					allow: '/',
					userAgent: '*',
				},
			],
		}),
		viteSingleFile(),
	],
	publicDir: '../static',
	root: './src',
});
