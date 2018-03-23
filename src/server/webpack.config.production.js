const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

const root = path.resolve(__dirname, '../../');

module.exports = {
  mode: 'production',

  entry: ['babel-polyfill', './src/client/index.js'],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(root, './dist/client'),
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        // js loader.
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // css loader.
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // file loader for images
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(root, './src/client')
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Redux Hot Boilerplate',
      template: path.resolve(root, './src/server/index.html'),
      favicon: path.resolve(root, './src/server/favicon.ico'),
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      hash: true
    }),

    // move the styles to an individual css file for parallelly downloading.
    new MiniCssExtractPlugin({
      filename: 'static/styles.css'
    }),

    // tell the client app developement mode.
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false
    })
  ]
};
