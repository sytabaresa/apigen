const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const config = {
    mode: 'none',
    entry: {
        'bundle': './index.js',
        'bundle.min': './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    plugins: [
        new MinifyPlugin({}, {
            include: /\.min\.js$/
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};

module.exports = config;
