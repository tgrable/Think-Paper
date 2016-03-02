/**
 * Created by jpilcher on 2/26/2016.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.scss$/,
                loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
            },
            {test: /\.png$/, loader: "url-loader?limit=100000"},
            {test: /\.jpg$/, loader: "file-loader"}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Think Paper-Mill',
            template: 'index.ejs',
        }),
       /* new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })*/
    ],

    devtool: 'source-map'
}