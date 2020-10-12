# webpack常用插件

- clean-webpack-plugin 清空文件夹插件

- html-webpack-plugin  生成一个index.html或依据模板生成

  HtmlWebpackPlugin 在此可以用于自动重新生成一个index.html或依据模板生成
  帮你把所有生产的js文件引入到html中，最终生成到output目录

- copy-webpack-plugin 复制静态资源

- webpack-dev-server　开发服务器

  > 先得知道 webpack-dev-server 插件所重新打包的文件并不会存放在实际的物理磁盘当中
  > 所以我们没有办法看到，它被存在电脑的内存中

  > 一般都是先webpack打包，然后webpack-dev-server执行，可以看到打包后的文件
  > 出现dist文件中内容为空的原因是clean-webpack-plugin清空文件夹
  > 可以先将dist文件的内容通过copy-webpack-plugin复制后，再进行清空