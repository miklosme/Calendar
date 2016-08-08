var webpack = require('webpack');
var PROD = JSON.parse(process.env.PRODUCTION || 'false');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=resources/[name].[ext]'
      },
    ]
  },
  plugins: PROD ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })] : []
};
