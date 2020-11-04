# context
- 
该配置会影响入口和loaders的解析，入口和loaders的相对路径会以context的配置作为基准路径，这样，你的配置会独立于CWD（current working directory 当前执行路径）

# output

> filename
> path
> library: "abc"  这样一来，打包后的结果中，会将自执行函数的执行结果暴露给abc  
> libraryTarget: "var"  该配置可以更加精细的控制如何暴露入口包的导出结果
- https://www.webpackjs.com/configuration/output/#output-librarytarget

# target 
> 设置打包结果最终要运行的环境
> target:"web" //默认值

# module 加载器
> noParse: /jquery/
- 不解析正则表达式匹配的模块，通常用它来忽略那些大型的单模块库，以提高构建性能

# resolve

> modules 
- 当解析模块时，如果遇到导入语句，require("test")，webpack会从下面的位置寻找依赖的模块
- modulse:['node_modules','a'] //模块的查找位置

> extensions
- extensions: [".js", ".json"]  //默认值
- 当解析模块时，遇到无具体后缀的导入语句，例如require("test")，会依次测试它的后缀名

> alias 
alias: {
  "@": path.resolve(__dirname, 'src'),
  "_": __dirname
}
- 有了alias（别名）后，导入语句中可以加入配置的键名，例如require("@/abc.js")，webpack会将其看作是require(src的绝对路径+"/abc.js")。
- 在大型系统中，源码结构往往比较深和复杂，别名配置可以让我们更加方便的导入依赖

# externals 从最终的bundle中排除掉配置的配置的源码
- 这比较适用于一些第三方库来自于外部CDN的情况，这样一来，即可以在页面中使用CDN，又让bundle的体积变得更小，还不影响源码的编写

# stats
- stats控制的是构建过程中控制台的输出内容