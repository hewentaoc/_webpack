console.log(333,__dirname)
module.exports = {
    // entry:'./entry.js',
    entry:{//入口文件
        main:'./entry1.js',
        a:'./entry2.js',
        test:['./entry1.js','./entry2.js']
    },
    output:{//出口文件
        filename:'[name].js',
        // filename:'[id].[chunkhash:5].js',
        path: __dirname + '/dist'
    },
    devtool:"source-map"//保存源文件
}