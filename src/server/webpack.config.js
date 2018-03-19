const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    // React HMR.
    'react-hot-loader/patch',
    // HMR for developement environment.
    'webpack/hot/only-dev-server',
    // Enable HMR.
    'webpack-hot-middleware/client',
    // entrypoint of client app.
    './src/client/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/static/'
  },

  devtool: 'inline-source-map',

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
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    // enable HMR.
    new webpack.HotModuleReplacementPlugin(),
    // print module name logs.
    new webpack.NamedModulesPlugin(),
    // not emit errors.
    new webpack.NoEmitOnErrorsPlugin(),
    // tell the client app developement mode.
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    })
  ]
};
