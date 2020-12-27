module.exports = {
    devtool:'source-map',
    mode:'development',
    module:{
        noParse:/test/ //该文件不进行模块解析　抽象语法树解析，依赖分析，模块语法替换
    }
}