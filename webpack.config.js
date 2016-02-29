/**
 * Created by jpilcher on 2/26/2016.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/app.js"
    },

    output: {
        path: "./dist",
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.css$/,
                loader: 'style!' + 'css?sourceMap'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Think Paper-Mill',
            template: 'index.ejs',
        })
    ],

    devtool: 'source-map'
}