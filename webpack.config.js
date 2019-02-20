const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlungin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './app/index.js'
  ], // entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { module: true } },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.jsx|.js$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlungin({
      title: 'React Boilerplate', // change your html title here
      template: path.resolve(__dirname, 'templates/index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    port: 3000,
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  devtool: 'source-map'
}

module.exports = config
