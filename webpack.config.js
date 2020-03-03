const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'index_bundle.js',
    publicPath: ""
  },
  module: {
    rules: [
      { test: /.js$/, use: "babel-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}