let src = './src/index.js';
let path = require('path')
// 相对于当前的执行路径
module.exports = {
    mode:'development',
    entry:{
        // index:"./src/index.js"
        index:'./index.js' //相对于src进行定位
    },
    output:{
      filename:'[name].[chunkhash:5].js',
      path: path.resolve(__dirname,'dist'),
      library: "abc"
    },
    module:{
        noParse: /jquery/
    },
    externals:{
        jquery: "$",
        lodash: "_"
    },
    resolve: {
        modules:['node_modules'],//模块的查找位置
        extensions: [".js", ".json"], //会依次测试它的后缀名，从而补齐后缀名
        alias:{ //路径的别名
            "@":path.resolve(__dirname,''),
        }
    },
    target:"web", //设置打包结果最终要运行的环境
    context:path.resolve(__dirname,'src'),//，入口和loaders的相对路径会以context的配置作为基准
    stats:{//控制的是构建过程中控制台的输出内容
        colors:true
    }
}