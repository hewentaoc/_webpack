const path = require('path');
// const rootPath = path.resolve(__dirname,'..');//找到根目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包css文件 
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const glob = require('glob');
let rootPath = path.resolve('./');//根目录－node运行的目录
let files = glob.sync('vues/**/*.js');
console.log(files)
let config = {
    entry:{
        main:'./src/main.js'
    },
    output:{
        filename:'[name].js',
        chunkFilename: '[name].chunk.js',//异步加载文件名称
        publicPath: ''//公共路径
    },
    resolve: {
        alias: {
          "@": rootPath, // 别名 @ = src目录
        },
        extensions: ['.js','.json','.vue'] //自动补充后缀名
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.(png)|(jpg)$/i,//不区分大小写
                use:{
                    loader:'url-loader',
                    options:{
                        limit:3000, //只要文件不超过3000 字节 = 3kb，则使用base64编码，否则，交给file-loader进行处理
                        name: "img/[name].[hash:5].[ext]",
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }  
        ]
    },
    plugins:[
       new CleanWebpackPlugin(),
       new MiniCssExtractPlugin(),
       new VueLoaderPlugin(),
       new HtmlWebpackPlugin({
         filename:"index.html",
         template:"./public/index.html",
         chunks:['main']
       })
    ]
}



module.exports = config;



