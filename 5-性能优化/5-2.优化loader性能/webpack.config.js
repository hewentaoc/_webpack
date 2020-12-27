
module.exports = {
    devtool:'source-map',
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,//忽略node_modules中应用babel-loader的场景
                //或
                // include: /src/,
                use: "babel-loader"
            }   
        ]
    }
}