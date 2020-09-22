const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        // main:"./index.js"
        a:'./src/a.js',
        b:'./src/b.js'
    },
    devtool: "source-map",
    output:{
        filename:'[name].[chunkhash:5].js',
        path:__dirname + '/demo'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'a.html', //文件名
            template:'./template/index.html', //html模板来源 
            chunks:['a']//默认会引入entry中全部的js,写了就只会引入a.js
        }),
        new HtmlWebpackPlugin({
            filename:'b.html',
            template:'./template/index.html',
            chunks:['b']
        })
    ]
}