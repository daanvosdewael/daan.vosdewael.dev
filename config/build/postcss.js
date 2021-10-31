export default {
    postcss: {
        plugins: {
            'postcss-preset-env': false,
            'postcss-import': {},
            'postcss-nested': {},
            'postcss-pxtorem': {
                propList: [
                    '*',
                ],
            },
            'postcss-sort-media-queries': {},
        },
    },
};
