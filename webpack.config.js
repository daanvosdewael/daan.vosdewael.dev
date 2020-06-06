const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HtmlWebpackSkipAssetsPlugin } = require('html-webpack-skip-assets-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const env = process.env.NODE_ENV
const minify = env === 'production'
const sourceMap = env === 'development'

const htmlWebpackPluginBaseConfig = {
    favicon: 'src/favicon.ico',
    inlineSource: '.css$',
    minify: minify ? { collapseWhitespace: true } : false,
    skipAssets: [/main.*.js/],
}

const config = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
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
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-import')(),
                                require('postcss-mixins')(),
                                require('postcss-preset-env')({
                                    features: {
                                        'custom-properties': {
                                            preserve: false,
                                        },
                                        'nesting-rules': true,
                                    },
                                    stage: 2,
                                }),
                                require('postcss-sort-media-queries')(),
                            ],
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

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({ filename: 'assets/styles.[contenthash:7].css' }),

        new HtmlWebpackPlugin({...htmlWebpackPluginBaseConfig, ...{
            filename: 'index.html',
            template: 'src/index.html',
        }}),

        new HtmlWebpackPlugin({...htmlWebpackPluginBaseConfig, ...{
            filename: 'about-me.html',
            template: 'src/about-me.html',
        }}),

        new HtmlWebpackSkipAssetsPlugin(),

        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),

        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/_headers', to: '[name].[ext]' },
                { from: 'src/_redirects', to: '[name].[ext]' },
                { from: 'src/assets/img/*.jpg', to: 'img/[name].[ext]' },
                { from: 'src/robots.txt', to: '[name].[ext]' },
                { from: 'src/sitemap.xml', to: '[name].[ext]' },
            ]
        }),
    ],
}

if (minify) {
    config.plugins.push(new OptimizeCSSAssetsPlugin())
}

module.exports = config
