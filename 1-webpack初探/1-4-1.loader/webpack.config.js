module.exports = {
    mode:'development',
    module:{
        rules:[
        {
            test:/index\.js/,
            use:['./loaders/loader3.js','./loaders/loader4.js']
        },
        {
            test:/\.js$/,
            use:['./loaders/loader1.js','./loaders/loader2.js']
        }
    ]
    }
}