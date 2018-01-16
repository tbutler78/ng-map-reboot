// We are using node's native package 'path'
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const Dotenv = require('dotenv-webpack');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
}

module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },

plugins: [
    new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html')
    }),
    new ExtractTextPlugin('style.bundle.css'),
    new ManifestPlugin(),
    new Dotenv({
        path: './.env',
        safe: false,
        systemvars: true,
        silent: false
    })
],

module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ]
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                use: 'css-loader',
            })
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
    ]
},

resolve: {
    extensions: ['.js', '.jsx']
}}