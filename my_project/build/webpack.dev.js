const {merge,mergeWithRules} = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const argv = require('yargs').argv; //获取packjson中传递的参数
console.log(argv.env)
//bashconfig中module
let baseModule = {
    module:baseConfig.module
}
let devModule = {
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['cache-loader','babel-loader']
            }
        ]
    }
}
let curModule = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use:"replace"
      },
    },
  })(baseModule, devModule).module
let devConfig = {
    mode: "development",
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js', //异步加载文件名称
        publicPath: argv.env == 'dev' ? '' : '/dist/', //公共路径
    },
    devServer: {
        port: 8000,
        hot: true, // 是否热更新，监听页面js、css变化
        open: true,
        proxy: {
            '/apm': {
                target: 'http://preview.app.market.pt.xiaomi.com',
                changeOrigin: true
            }
        }
    },
    // stats: 'none'
    stats:{    
        modules: false, // 打包时不显示具体模块信息
        entrypoints: false, // 打包时不显示入口模块信息
        children: false, // 打包时不显示子模块信息
    }
};
devConfig = merge(baseConfig, devConfig);
devConfig.module = curModule
// console.dir(devConfig, {depth: 4})

module.exports = devConfig