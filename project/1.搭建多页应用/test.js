const {merge,mergeWithRules} = require("webpack-merge");

let baseModule = {
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            }
        ]
    }
}
let devModule = {
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['cache-loader','babel-loader']
            }
        ]
    }
}
// use: {
//     loader: "match",
//     options: "replace",
//   },
let a = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use:"replace"
      },
    },
  })(baseModule, devModule)

console.dir(a,{depth:4})
module.exports = a;