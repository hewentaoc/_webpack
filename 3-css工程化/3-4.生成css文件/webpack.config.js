const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[name].[chunkhash:5].js',
        path:__dirname + '/dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                  MiniCssExtractPlugin.loader,
                 'css-loader',
                 {//自动添加css前缀
                    loader: 'postcss-loader',
                    options:{
                        postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                                {
                                    browsers: [
                                        "last 2 version",
                                        "> 1%"
                                    ]
                                },
                              ],
                            ],
                          },
                    }
                 }
                ]
            },
            {
                test:/\.less$/,
                use:[
                  MiniCssExtractPlugin.loader,
                 'css-loader',
                 {
                    loader: 'postcss-loader',
                    options:{
                        postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                                {
                                    browsers: [
                                        "last 2 version",
                                        "> 1%"
                                    ]
                                },
                              ],
                            ],
                          },
                    }
                 },
                 'less-loader'
                ]
            },
            // {
            //     test:/\.less$/,
            //     use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            // },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            chunks:['index']
        })
    ]
}