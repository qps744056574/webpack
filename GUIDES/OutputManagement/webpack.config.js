const path = require('path');
/* 
如果 首页引入了多个打包后的js，
但是，如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* 
你可能已经注意到，由于过去的指南和代码示例遗留下来，导致我们的 /dist 文件夹相当杂乱。webpack 会生成文件，然后将这些文件放置在 /dist 文件夹中，但是 webpack 无法追踪到哪些文件是实际在项目中用到的。

通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。

*/
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app1: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      /* 
      css-loader 让webpack 识别 css ，style-loader 让css 插入到 html中  Adds CSS to the DOM by injecting a <style> tag   
      <style></style> 直接插入到html中，所以dist 里面看不到
      */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录。这就是说，我们可以将它们用于任何类型的文件，包括字体。让我们更新 webpack.config.js 来处理字体文件：
      {
        test: /\.(png|svg|jpg|gif)|\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
};