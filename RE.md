# webpack主要做啥的

- webpack做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包到指定的文件中。
- 更多的功能需要借助webpack loaders 和 wepack plugins完成

# webpack.config.js

- 在node环境中进行文件大打包，读取文件，分析出文件的依赖关系
- 在打包过程中，仅仅是处理文件的依赖关系，不会执行文件

- webpack.config.js是在node环境中进行执行的，仅支持node环境的语法解构