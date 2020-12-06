# webpack常用插件

- clean-webpack-plugin 清空文件夹插件

- html-webpack-plugin  生成一个index.html或依据模板生成

  HtmlWebpackPlugin 在此可以用于自动重新生成一个index.html或依据模板生成
  帮你把所有生产的js文件引入到html中，最终生成到output目录
  ```js
    new HtmlWebpackPlugin({
      chunks:'all'
    })
  ```
  chunks:'all' 默认值会把所有的js都引进来

- copy-webpack-plugin 复制静态资源

```js
    new CopyWebpackPlugin({
        patterns: [{
            from: __dirname + '/dist',
            to:__dirname+ '/demo'
        }]
    })
```

- webpack-dev-server　开发服务器

  > 先得知道 webpack-dev-server 插件所重新打包的文件并不会存放在实际的物理磁盘当中
  > 所以我们没有办法看到，它被存在电脑的内存中

  > 一般都是先webpack打包，然后webpack-dev-server执行，可以看到打包后的文件
  > 出现dist文件中内容为空的原因是clean-webpack-plugin清空文件夹
  > 可以先将dist文件的内容通过copy-webpack-plugin复制后，再进行清空


- file-loader url-loader

> file-loader:生成依赖的文件到输出目录,然后将模块文件设置为：导处一个路径
  
```js
//file-loader
function loader(source){
	// source：文件内容（图片内容 buffer）
	// 1. 生成一个具有相同文件内容的文件到输出目录　（将需要处理的图片打包的目标文件夹中）
	// 2. 返回一段代码   export default "文件名"　（处理源码字符串后返回新生成图片的路径）
}
```
> url-loader:将依赖的文件转换为：导出一个base64格式的字符串
```js
//url-loader
function loader(source){
	// source：文件内容（图片内容 buffer）
	// 1. 根据buffer生成一个base64编码
	// 2. 返回一段代码   export default "base64编码"
}
```


# 解决路径问题

在使用file-loader或url-loader时，可能会遇到一个非常有趣的问题

比如，通过webpack打包的目录结构如下：

```yaml
dist
    |—— img
        |—— a.png  #file-loader生成的文件
    |—— scripts
        |—— main.js  #export default "img/a.png"
    |—— html
        |—— index.html #<script src="../scripts/main.js" ></script>
```

这种问题发生的根本原因：模块中的路径来自于某个loader或plugin，当产生路径时，loader或plugin只有相对于dist目录的路径，并不知道该路径将在哪个资源中使用，从而无法确定最终正确的路径

面对这种情况，需要依靠webpack的配置publicPath解决



# webpack内置插件 {ignore}

所有的webpack内置插件都作为webpack的静态属性存在的，使用下面的方式即可创建一个插件对象

```js
const webpack = require("webpack")

new webpack.插件名(options)
```

## DefinePlugin

全局常量定义插件，使用该插件通常定义一些常量值，例如：

```js
new webpack.DefinePlugin({
    PI: `Math.PI`, // PI = Math.PI
    VERSION: `"1.0.0"`, // VERSION = "1.0.0"
    DOMAIN: JSON.stringify("duyi.com")
})
```

这样一来，在源码中，我们可以直接使用插件中提供的常量，当webpack编译完成后，会自动替换为常量的值

## BannerPlugin

它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息

```js
new webpack.BannerPlugin({
  banner: `
  hash:[hash]
  chunkhash:[chunkhash]
  name:[name]
  author:yuanjin
  corporation:duyi
  `
})
```

## ProvidePlugin

自动加载模块，而不必到处 import 或 require 

```js
new webpack.ProvidePlugin({
  $: 'jquery',
  _: 'lodash'
})
```

然后在我们任意源码中：

```js
$('#item'); // <= 起作用
_.drop([1, 2, 3], 2); // <= 起作用
```