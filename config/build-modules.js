export default {
    buildModules: [
        '@nuxt/postcss8',
        ['@nuxtjs/netlify-files', {
            existingFilesDirectory: './netlify',
        }],
    ],
};
