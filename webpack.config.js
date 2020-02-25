const path = require('path');
const webpack = require('webpack')

module.exports = {

    entry: './src/app.config.js',

    output: {
        path: path.resolve(__dirname, 'build/static'),
        filename: 'app.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
            },
            {
                test: /\.jsx?$/,
                loader: '@tarojs/taro-loader/lib/h5',
                include: [path.resolve(__dirname, 'src', 'app.config.js')],
                options: {
                    config: {
                        pages: [
                            'pages/index/index'
                        ],
                    },
                    pages: {
                        'pages/index/index': {
                            navigationBarTitleText: 'TodoMVC'
                        }
                    },
                    framework: 'react'
                }
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'static'),
        // compress: true,
        port: 9000,
        historyApiFallback: true,
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.FRAMEWORK': JSON.stringify('react')
        }),
        new webpack.DefinePlugin({
            'process.env.TARO_ENV': JSON.stringify('h5')
        })
    ],

    resolve: {
        alias: {
            // 如果是 framework 是 react/nerv 就加这个
            '@tarojs/components$': '@tarojs/components/h5/react',
            react: path.resolve('./node_modules/react')
        }
    }

};