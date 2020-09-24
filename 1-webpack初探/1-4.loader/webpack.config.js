module.exports = {
    mode:'development',
    entry:{
        index:"./src/index.js"
    },
    output:{
        filename:"[name].js"
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:['./loaders/style-loader'],
            // },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'./loaders/style-loader'
                    },
                    {
                        loader:'less-loader'
                    },
                ]
            }
        ]
    }
}
