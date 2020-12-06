const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log('ssss')
module.exports = {
    entry:{
        index:'./src/index.js',
        mytest:'./src/mytest.js'
    },
    output:{
        filename:'[name].[chunkhash:5].js',
        path:__dirname + '/dist'
    },
    plugins: [
        //配合path:__dirname + '/dist'才有用
        new CleanWebpackPlugin({

        }),
    ],
}