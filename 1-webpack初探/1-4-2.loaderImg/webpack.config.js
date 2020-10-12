const  HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    entry:{
      a:'./src/a.js'
    },
    output:{
      filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(png)$/,
                use:{
                  loader: 'url-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"main.html",
            template:"./src/a.html",
            chunks:['a']
        })
    ]
}