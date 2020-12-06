let webpack = require('webpack')
module.exports = {
    devtool:'source-map',
    mode:'development',
    plugins:[
        new webpack.DefinePlugin({
            NAME:`"HeWenTao"`
        }),
        new webpack.BannerPlugin({
            banner:`
             author:hewentao
            `
        }),
       // 自动加载模块，而不必到处 import 或 require 
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'lodash'
          })

    ]
}