const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9001,
        historyFallbackApi: true
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                loader: require.resolve("babel-loader"),
                options: {
                    preset: [require.resolve("@babel/preset-react")]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

