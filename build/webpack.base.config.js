const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'

};

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        // filename: '[name].js',
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader'
            }
        }, {
            // Vue
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loader: {
                    scss: 'vue-style-loader!css-loader!sass-loader'
                }
            }
        },
        {
            // Pug
            test: /\.pug$/,
            loader: 'pug-plain-loader'
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: `${PATHS.assets}img/[name].[ext]`
                }
            },
        },

        {
            test: /\.(sass|scss)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    // options: {
                    //     publicPath: `/${PATHS.assets}css`,
                    // },
                },
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        postcssOptions: {
                            path: '../postcss.config.js'
                        }
                    }
                },
                'sass-loader',
            ],
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: `/${PATHS.assets}css`,
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        postcssOptions: {
                            path: 'postcss.config.js'
                        }
                    }
                },
            ],
        }
        ]
    },
    resolve: {
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js'
        // }
        alias: {
            '~': PATHS.src, // Example: import Dog from "~/assets/img/dog.jpg"
            '@': `${PATHS.src}/js`, // Example: import Sort from "@/utils/sort.js"
            vue$: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // filename: '[name].css',
            filename: `${PATHS.assets}css/[name].css`,
            // chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'

        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/img`,
                    to: `${PATHS.assets}img`,
                },
                // {
                //     from: `${PATHS.src}/static`,
                //     to: '',
                // }
            ]
        }),
    ],
}
