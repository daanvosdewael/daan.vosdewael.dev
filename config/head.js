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
                href: 'https://daan.vosdewael.dev/',
                rel: 'canonical',
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
                content: 'Daan Vos de Wael is a frontend developer',
                hid: 'description',
                name: 'description',
            },
            {
                content: 'Daan Vos de Wael | Frontend Developer',
                property: 'og:title',
            },
            {
                content: 'https://daan.vosdewael.dev/',
                property: 'og:url',
            },
            {
                content: 'website',
                property: 'og:type',
            },
            {
                content: 'Daan Vos de Wael | Frontend Developer',
                property: 'og:site_name',
            },
            {
                content: 'Daan Vos de Wael is a frontend developer',
                property: 'og:description',
            },
        ],
        script: [
            {
                json: {
                    '@context': 'http://schema.org',
                    '@type': 'WebSite',
                    'description': 'Daan Vos de Wael is a frontend developer',
                    'headline': 'Daan Vos de Wael | Frontend Developer',
                    'name': 'Daan Vos de Wael | Frontend Developer',
                    'url': 'https://daan.vosdewael.dev/',
                },
                type: 'application/ld+json',
            },
        ],
        titleTemplate: titleChunk => (titleChunk ? `${titleChunk} | Daan Vos de Wael` : 'Daan Vos de Wael | Frontend Developer'),
    },
};
