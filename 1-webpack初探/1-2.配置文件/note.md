# 得到当前文件的目录

- path: __dirname + '/dist'

# 得到node运行的目录

- 在webpack配置文件中，getPath代表node运行的目录
- let getPath = path.resolve('./');

# source-map

- souce map 可以当运行发生错误的时候，我们更加希望能看到源代码中的错误，而不是转换后代码的错误

　devtool:hidden-source-map

- SourceMapDevToolPlugin插件可以来配置source-map,他的可配置性更高

# entry
- 在你想要多个依赖文件一起注入，并且将它们的依赖导向(graph)到一个“chunk”时，传入数组的方式就很有用
    entry:{
        test:['./entry1.js','./entry2.js']
    },

- 将多个js文件，合并成一个模块

# output
[id].[chunkhash:5]
__dirname + '/dist'

 output:{
    path:
    filename:
 }
