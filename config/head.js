/* eslint sort-keys: 'error' */

export default {
    head: {
        link: [
            {
                href: '/favicon.ico',
                rel: 'icon',
                type: 'image/x-icon',
            },
            {
                as: 'font',
                crossorigin: 'anonymous',
                href: '/fonts/NotoSerif-ExtraLight.woff2',
                rel: 'preload',
                type: 'font/woff2',
            },
            {
                as: 'font',
                crossorigin: 'anonymous',
                href: '/fonts/NotoSerif-LightItalic.woff2',
                rel: 'preload',
                type: 'font/woff2',
            },
            {
                as: 'font',
                crossorigin: 'anonymous',
                href: '/fonts/NotoSerif.woff2',
                rel: 'preload',
                type: 'font/woff2',
            },
        ],
        meta: [
            {
                charset: 'utf-8',
            },
            {
                content: 'width=device-width, initial-scale=1',
                name: 'viewport',
            },
            {
                content: '',
                hid: 'description',
                name: 'description',
            },
        ],
        titleTemplate: titleChunk => (titleChunk ? `${titleChunk} | Daan Vos de Wael` : 'Daan Vos de Wael | Frontend Developer'),
    },
};
