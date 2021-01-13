const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const prodConfig = {
  mode: "production",
  devtool: "none",
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [new WebpackBundleAnalyzer()],
};

module.exports = merge(baseConfig, prodConfig);
