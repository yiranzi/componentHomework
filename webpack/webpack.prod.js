/**
 * webpack config (prod)
 */
const webpackMerge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigPathsPlugin  = require('awesome-typescript-loader');

process.env.NODE_ENV = "production"

module.exports = webpackMerge([
    require("./webpack.base"),
    {
        entry: {
            "bundle": path.join(
                __dirname,
                "..",
                "src",
                "entrypoint.tsx"
            ),
            vendor: ['react', 'react-dom', 'lodash']
        },
        output: {
            path: path.join(__dirname, "..", "prod"),
            filename: "[name].js",
        },
        plugins: [
            new webpack.DefinePlugin({
                $$webpack_dev: JSON.stringify(true)
            }),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                title: 'prod',
                template: 'index.html',
                filename: 'index.html',
                hash: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'mainifest',
                chunks: ['vendor']
            })
        ],
        devtool: false
    }
]);