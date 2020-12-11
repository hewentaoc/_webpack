let {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry:{
        a:'./src/a/a.js',
        b:'./src/b/b.js'
    },
    output:{
        filename:'[name].[chunkhash:5].js',
        path:__dirname  + '/dist'
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}