var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
require("babel-polyfill");

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
          fallback: "style-loader",
          use: 'css-loader',
        }),
      },
    ]
  },

  plugins: [
    // reduce the js file size.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),

    // move the styles to an individual css file for parallelly downloading.
    new ExtractTextPlugin("styles.css"),

    // tell the client app developement mode.
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
    }),
  ]
};
