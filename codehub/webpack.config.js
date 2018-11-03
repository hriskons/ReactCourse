const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "app/index.html"
});

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.(js)$/],
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader" ]
            }
        ]
    },
    mode: "development",
    plugins: [htmlPlugin]
};