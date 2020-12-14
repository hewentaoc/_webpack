module.exports = {
    mode:'development',
    // devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.less$/,
                use:['style-loader','css-loader?modules','less-loader']
            }
        ]
    }
}