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
  devtool: PROD ? '' : 'source-map',
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /values\.scss$/,
        loader: 'sass-to-js-var'
      },
      {
        test: /\.scss$/,
        exclude: /values\.scss$/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=resources/[name].[ext]'
      },
    ]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true
      }
    })
  ] : []
};
