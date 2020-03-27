const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
console.log(' process.NODE_ENV', process.env.NODE_ENV)
module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].[hash].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /.js|jsx$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }, 'less-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ],
        exclude: /src/,
        include: /node_modules/
      },
      {
        test: /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader, 'css-loader', {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ],
        exclude: /src/,
        include: /node_modules/
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 9000,
    open: false,
    index: 'index.html'
  },
  plugins: [
    // new AntdDayjsWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'react20200303',
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html')
    }),
    new webpack.ProgressPlugin({
      activeModules: true
    }),
    new webpack.DefinePlugin({
      XXXXXX: JSON.stringify('ZZZZZZZZ'),
      ZZZZZZZ: '222222222222'
    }),
    new CopyPlugin([{
      from: 'static', to: 'static'
    }]),

  ],
  optimization: {
    minimizer: [
      // new TerserPlugin({ /* additional options here */ })
    ]
  }
}
