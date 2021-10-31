export default {
    postcss: {
        plugins: {
            'postcss-preset-env': false,
            'postcss-import': {},
            'postcss-nested': {},
            'postcss-custom-media': {
                importFrom: 'assets/css/base/breakpoints.css',
            },
            'postcss-pxtorem': {
                propList: [
                    '*',
                ],
            },
        },
    },
};
