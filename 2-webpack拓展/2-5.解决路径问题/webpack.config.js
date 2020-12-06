let {CleanWebpackPlugin} = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        test:'./src/test.js',
    },
    output:{
        filename:'js/[name].[chunkhash:5].js',//生成在js文件
        path:__dirname + '/dist',
        // publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.png$/,
                use:{
                    loader:'url-loader',
                    options:{
                        //小于4kb生成base64格式
                        limit:3000,
                        name:'imgs/[name].[hash:5].[ext]'
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./assets/index.html',
            filename:'html/index.html', //生成在html文件下
            chunks:['test']
        })
    ],
    devServer:{
        port:9090,
        open:true,
        //对于有文件夹的目录需要配置
        openPage:'html/'
    }
}