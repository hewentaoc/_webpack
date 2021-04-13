const {merge} = require("webpack-merge");
const webpack = require('webpack');
const baseConfig = require("./webpack.config.js");
const WebpackUploadPlugin = require('../plugin/index');
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;//检测包的大小
const prodConfig = {
  mode: "production",
  devtool: "none",
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",//对于所有的chunk都要应用分包策略
      cacheGroups: {
        styles: {
          minSize: 0,//当分包达到多少字节后才允许被真正的拆分，默认值30000
          test: /\.css$/,
          minChunks: 2,//一个模块被多少个chunk使用时，才会进行分包，默认值1
        },
      },
    },
  },
  plugins: [
    new WebpackBundleAnalyzer(),
    // new webpack.SourceMapDevToolPlugin({
    //   test: /\.js$/,
    //   filename: 'sourcemaps/[file].map',
    //   exclude: /\.css$/
    // })
    // new WebpackUploadPlugin({
    //   path: 'dist/sourcemaps',
    //   receiver: 'http://10.38.161.9:7000/api/nocas/receiver',
    //   to: '/home/work/data/miui-store-fe-tool/upload'
    // })
  ]
};

module.exports = merge(baseConfig, prodConfig);
