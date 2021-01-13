// const {
//     merge
// } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
console.log(baseConfig)
// const argv = require('yargs').argv; //获取packjson中传递的参数
// console.log(argv.env)
let devConfig = {
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js', //异步加载文件名称
        publicPath: argv.env == 'dev' ? '' : '/dist/', //公共路径
    },
    devServer: {
     
    },
    // stats: 'none'
};
// devConfig = merge(baseConfig, devConfig);
// console.dir(devConfig, {
//     depth: 4
// })
module.exports = devConfig