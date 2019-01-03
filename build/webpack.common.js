const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.ts",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output management"
        }),
        new CleanWebpackPlugin(["dist"]),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, '../src/')
        },
        extensions: [".tsx", ".ts", ".js"]
    }
};
