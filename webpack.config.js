const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebPackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js','.jsx']
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.htm$/,
                use:{
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        }),
        new FaviconsWebPackPlugin('./public/icon.png')
    ]
}