const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 const webpack = require('webpack');
// 摇数优化
module.exports = {
  entry: {
      app: './src/index.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    /* 
    模块热更新 
    启用此功能实际上相当简单。而我们要做的，就是更新 webpack-dev-server 的配置，和使用 webpack 内置的 HMR 插件( new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin())
    HMR 不适用于生产环境，这意味着它应当只在开发环境使用。更多详细信息，请查看生产环境构建指南。
    */
    hot: true
  },
  /* 
    如果不设置的话，在终端会有警告  The 'mode' option has not been set, webpack will fallback to 'production' for this value
    可以看到，这个mode 最好是设置一下，不然mode 默认就是 production ，默认开启 摇树优化
     mode：  development  Enables NamedChunksPlugin and NamedModulesPlugin . 可以开启这两个插件
   prodution 可以开启要数优化
  */
  // mode:"development",
  mode:"production",

  /* 
      只有build 的时候才会在 dist 里面生成文件    
    */
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};