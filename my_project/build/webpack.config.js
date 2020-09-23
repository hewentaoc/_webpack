const path = require('path');
const rootPath = path.resolve(__dirname,'..');//找到根目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const entrys = getEntryPath('vues/**/*.js')
let config = {
    entry:entrys,
    output:{
        filename:'[name].js'
    },
    plugins:[
        new CleanWebpackPlugin()
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



