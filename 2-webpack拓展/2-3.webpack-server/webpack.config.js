let HtmlWebpackPlugin = require('html-webpack-plugin')
let {CleanWebpackPlugin}  = require('clean-webpack-plugin')


module.exports = {
    mode:'development',
    devtool: "source-map",
    entry:{
        test:'./src/test.js'
    },
    output:{
        filename:'[name].[chunkhash:5].js',
        path:__dirname + '/dist'
    },
    module:{
        rules:[
        // {
        //     test:/\.png$/,
        //     use:[{
        //         loader:'file-loader',
        //         options:{
        //             //生成文件名:name: 原始文件名
        //             //添加hash
        //             //ext文件后缀名
        //             name:'[name].[hash:5].[ext]'
        //         }
        //     }]
        // }
        {
            test:/\.png$/,
            use:[
                //生成base格式的路径
                {
                    loader:'url-loader',
                    options:{
                        //小于4kb生成base64格式
                        limit:3000,
                        name:'imgs/[name].[hash:5].[ext]'
                    }
                }
            ]
        }
    ]},
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks:['test']
        })
    ],
    devServer:{ 　　
        port:9090, //端口号
        open:true, //是否打开浏览器
        // proxy:{　　//配置服务器代理
        //     '/api':{
        //         target:'http://open.duyiedu.com',
        //         changeOrigin: true //更改请求头中的host和origin
        //     }
        // }
    }
}