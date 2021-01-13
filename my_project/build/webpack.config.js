const path = require('path');
// const rootPath = path.resolve(__dirname,'..');//找到根目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 打包css文件 
const glob = require('glob');
let rootPath = path.resolve('./');//找到根目录　node运行的目录
const entrys = getEntryPath('vues/**/*.js')
let files = glob.sync('vues/**/*.js');
console.log(files)
let config = {
    devtool:'source-map',
    entry:entrys,
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
            }   
        ]
    },
    plugins:[
       new CleanWebpackPlugin(),
       new MiniCssExtractPlugin()
    ]
}
let entryName = Object.keys(entrys);
/**
 * 处理文件夹下html模板
 */
entryName.forEach((pathname)=>{
    let params = {
        filename:pathname + '.html', //文件名
        template:entrys[pathname].replace(/js/,'html'), //html模板来源 
        chunks:[pathname]//默认会引入entry中全部的js,写了就只会引入a.js
    }
    config.plugins.push(new HtmlWebpackPlugin(params));
})


/**
 * 处理文件夹下所有入口文件
 */
function getEntryPath(){
    let files = glob.sync('vues/**/*.js');
    let entries = {};
    for(let i = 0 ; i < files.length ; i++){
        let entry = files[i];
        let extandName = path.extname(entry);
        let entryName = path.basename(entry,extandName);
        entries[entryName] = './'+ entry;
    }
    return entries;
}
module.exports = config;



