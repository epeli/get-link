let path = require("path");
let webpack = require("webpack");

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/index.js",
    ],

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: "getLink",
        libraryTarget: "umd",
    },

    context: __dirname,
    target: "web",

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: ["es2015"],
                    plugins: ["add-module-exports"],
                },
            },
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },

            output: {
                comments: false,
                semicolons: true,
            },
        }),
    ],
};
