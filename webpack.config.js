const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].[hash].js',
    publicPath: ""
  },
  module: {
    rules: [
      { test: /.js$/, use: "babel-loader" },
      { test: /.jsx$/, use: "babel-loader" },
      {
        test: /.less$/, use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, 'less-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9000,
    open: false,
    index: "index.html",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "react20200303",
      filename: "index.html",
      template: path.join(__dirname, './src/index.html')
    })
  ]
}