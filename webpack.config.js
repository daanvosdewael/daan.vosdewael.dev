const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HtmlWebpackSkipAssetsPlugin } = require('html-webpack-skip-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const env = process.env.NODE_ENV
const minify = env === 'production'
const sourceMap = env === 'development'

const config = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'src', 'assets'),
        },
    },

    devtool: sourceMap ? 'inline-source-map' : undefined,

    entry: './src/assets/js/app.js',

    mode: env,

    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap,
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-import',
                                    'postcss-nested',
                                    {
                                        'postcss-pxtorem': {
                                            propList: [
                                                '*',
                                            ],
                                        },
                                    },
                                    'postcss-sort-media-queries',
                                ],
                            },
                            sourceMap,
                        },
                    },
                ],
            },
        ],
    },

    output: {
        filename: 'assets/[name].[chunkhash:7].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({ filename: 'assets/styles.[contenthash:7].css' }),

        new HtmlWebpackPlugin({
            favicon: 'src/favicon.ico',
            filename: 'index.html',
            inlineSource: '.css$',
            minify: minify ? { collapseWhitespace: true } : false,
            skipAssets: [/main.*.js/],
            template: 'src/index.html',
        }),

        new HtmlWebpackSkipAssetsPlugin(),

        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),

        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/_headers', to: '[name].[ext]' },
                { from: 'src/_redirects', to: '[name].[ext]' },
                { from: 'src/assets/fonts/*', to: 'fonts/[name].[ext]' },
                { from: 'src/robots.txt', to: '[name].[ext]' },
                { from: 'src/sitemap.xml', to: '[name].[ext]' },
            ]
        }),
    ],
}

module.exports = config
