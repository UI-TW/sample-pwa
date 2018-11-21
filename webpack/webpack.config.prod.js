const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./base');
const path = require('path');

webpackConfig.entry = './src';
webpackConfig.plugins.push(
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../', 'src/images'),
      to: path.resolve(__dirname, '../', 'dist/images')
    }]
  ),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false
    }
  }));

module.exports = webpackConfig;
