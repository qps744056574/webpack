/* 
  path.resolve([...paths])  //方法用于将相对路径转为绝对路径。 返回将路径或路径片段的序列解析为绝对路径的新的path 这里说下魔术变量： __dirname，指的是当前路径的绝对路径
  path.join方法用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是”/“，Windows系统是”\“
*/
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 注意整个配置中我们使用 Node 内置的 path 模块，并在它前面加上 __dirname这个全局变量。可以防止不同操作系统之间的文件路径问题，并且可以使相对路径按照预期工作。
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd"
  },
  devServer: {
    contentBase: './dist',
    port: 8080
  },
  /* 
    默认 false
    监控文件的变化，并且自动打包编译代码，但是需要重新刷新浏览器
    devServer 方式就不用自动刷新浏览器 这是选择3中开发工具的2种，还有一种是选择中间件 
    官网 https://www.webpackjs.com/guides/development/#%E9%80%89%E6%8B%A9%E4%B8%80%E4%B8%AA%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7
  */
  watch:false,
  devtool: "source-map",
  // 开发环境
  mode: 'production',
  // webpack 默认是处理 js 的，如果非js 文件的话，那么需要用loader ，这样webpack 才会处理这种类型的文件（比如css 等）
  module: {
    rules: [{
      test: /\.css$/, //哪些文件
      use: [ //用什么loader
        'style-loader',
        'css-loader'
      ]
    }]
  },
  //这些选项能设置模块路径如何被解析 比如整个别名 然后其他地方就可以使用这个别名了  比如在 index.js 中使用resolve 这个别名
  resolve: {
    alias: {
      resolve: path.resolve(__dirname, 'src/'),
    }
  },
  plugins: [
    /* 
      官网翻译的不详细 还是得看原版的 原版的有下面这个解释  诶 英文好真好
      ProvidePlugin  自动加载模块，而不必到处 import 或 require 。可以以全局的模式直接使用模块变量
    */
    new webpack.ProvidePlugin({
      aa1: path.join(__dirname, './src/plugin'),
    })
  ],
  /* 
    打包的时候忽略打包的文件 因为之前 npm 安装jquery并且导入了

    如果忽略2种方法：
    引入cdn 的juqery 也就是在线的jquery
        1. 删除掉import语句 因为就是全局的变量，所以可以直接使用
        2. 不删除import语句 增加 externals 配置


      如过不这样写  npm 安装的jquer ，然后在引入，就会打包到bundle.js 中，这样的话就会变的非常的大  现在我是有 162k
      如过下面这样 只有75k
        1， html 改为cdn引入
        2.  配置 externals
        3.  以前的引入都不用动 import 和require

        key  jquery  就是 import $ from 'jquery'  表示应该排除 import $ from 'jquery' 中的 jquery 模块
        value  一个全局的 jQuery 变量 因为jquery 这个 js返回了一个全局的jQuery变量

       
  */
  // externals: {
  //   jquery: 'jQuery'
  // }
 
};