// let cssLoader = require('./loader/css-loader');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MyPlugin = require('./plugin/MyPlugin')
const path = require('path')
module.exports = {
    mode:'development',
    entry:{
        main:"./src/index.js"
    },
    output:{
        filename:'[name].[chunkhash:5].js',
        path: path.resolve(__dirname,'dist'),
    },
    module:{
       rules:[
           {
               test:/\.css$/,
               use:['./loader/css-loader.js']
           }
       ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html",
            chunks:['main']
        }),
        new MyPlugin()
    ]
}
