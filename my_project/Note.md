# 匹配文件名

- glob.sync(pattern, [options])
  pattern {String} 待匹配的模式
  options {Object}

- return: {Array<String>} 匹配模式的文件名


# 找到对应路径

- path.basename('/a/b/c/d/index.html') => index.html
- path.basename('/a/b/c/d/index.html','.html') => index
- path.extname(entry) 找到文件的扩展名.js


# 深层次文件可以使用

  entry路径:
- index:'./vues/index/index.js'


# webpack文件配置

1. 基本配置

- 配置不同环境的webpack文件

- 如何在让dev中loader覆盖base.config.js中loader

- 是否添加post-css配置

- publicPath: "/" 使用需要注意,会在各个文件引用之前拼接 publicPath

- 自动分包问题





```js
  contentBase: path.resolve(__dirname, './'),//告诉服务器从哪里提供内容
  host: '0.0.0.0',
  publicPath: '/dist/',// 设置资源文件路径
  openPage:'html/'　默认打开的路径
  inline: true, //可以监控js变化
  port: 8000,
  hot: true, // 是否热更新，监听页面js、css变化
  watchContentBase:true, //监听页面html变化
  open: true,
  proxy: {
      '/apm': {
          target: 'http://preview.app.market.pt.xiaomi.com',
          changeOrigin: true
      }
  }
```

```js
  mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: {
          loader: "match",
          options: "replace",
        },
      },
    },
  })(a, b),
```

