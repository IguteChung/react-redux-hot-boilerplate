const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

const root = path.resolve(__dirname, '../../');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(root, './dist'),
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
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
        removeEmptyAttributes: true,
      },
      hash: true
    }),
    // reduce the js file size.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),

    // move the styles to an individual css file for parallelly downloading.
    new ExtractTextPlugin('static/styles.css'),

    // tell the client app developement mode.
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false
    })
  ]
};
