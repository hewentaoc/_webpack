# 匹配文件名

- glob.sync(pattern, [options])
  pattern {String} 待匹配的模式
  options {Object}

- return: {Array<String>} 匹配模式的文件名


# 找到对应路径

  path.basename('/a/b/c/d/index.html') => index.html
  path.basename('/a/b/c/d/index.html','.html') => index
  path.extname(entry) 找到文件的扩展名.js


# 深层次文件可以使用

  entry路径:
- index:'./vues/index/index.js'