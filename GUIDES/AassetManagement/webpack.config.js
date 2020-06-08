const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
      }
};