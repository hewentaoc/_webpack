const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// new webpack.HotModuleReplacementPlugin()
const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js",
        a:'./src/a.js'
    },
    output: {
        filename: '[name].js',
        publicPath: '/dist/',
        //可以显示目录——展示出dist、src等文件夹
        //本地服务器所加载的页面所在的目录
        //html文件展示在指定的目录中,默认是根目录
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'a.html',
            template: './src/a.html',
            chunks: ['a']
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: './public',
                // to: './'
            }]
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: __dirname + '/dist',
        //         to:__dirname+ '/demo'
        //     }]
        // }),
    ],
    // 建议 devServer.publicPath 与 output.publicPath 相同。
    devServer: {
        contentBase: path.resolve(__dirname, './'),//告诉服务器从哪里提供内容
        host: '0.0.0.0',
        inline: true, //可以监控js变化
        port: 8080,
        hot:true, // 是否热更新，监听页面js、css变化
        publicPath: '/dist/',// 设置资源文件路径
        watchContentBase:true //监听页面html变化
        // proxy: {
        //   '/apm': {
        //     target: 'http://preview.app.market.pt.xiaomi.com',
        //     changeOrigin: true
        //   }
        // }
      }
}