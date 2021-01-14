const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;//检测包的大小
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin")
const prodConfig = {
  mode: "production",
  // devtool: "none",
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",//对于所有的chunk都要应用分包策略
      cacheGroups: {
        styles: {
          minSize: 10000,//当分包达到多少字节后才允许被真正的拆分，默认值30000
          test: /\.css$/,
          minChunks: 2,//一个模块被多少个chunk使用时，才会进行分包，默认值1
        },
      },
    },
    minimize: true,
    minimizer: [
      // 压缩时使用的插件，可以有多个
      new TerserPlugin({
        extractComments: false, // 这个选项如果为true 会生成一个xxx.js.LICENSE.txt文件 存储特定格式的注释
      }),
      new OptimizeCSSAssetsPlugin()//压缩css
    ]
  },
  // plugins: [new WebpackBundleAnalyzer()],
  stats:{    
    modules: false, // 打包时不显示具体模块信息TerserPlugin
    entrypoints: false, // 打包时不显示入口模块信息
    children: false, // 打包时不显示子模块信息
  }
};

module.exports = merge(baseConfig, prodConfig);
