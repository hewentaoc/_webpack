module.exports = {
    mode:'development',
    watch:true,
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.png$/,
                use:['file-loader']
            }
        ]
    }
}