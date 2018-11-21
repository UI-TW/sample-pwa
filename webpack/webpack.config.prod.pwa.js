const webpackConfig = require('./webpack.config.prod');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

webpackConfig.plugins.push(
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../', 'src/images'),
      to: path.resolve(__dirname, '../', 'dist/images')
    },
    {
      from: path.resolve(__dirname, '../', 'src/manifest.json'),
      to: path.resolve(__dirname, '../', 'dist')
    },
    {
      from: path.resolve(__dirname, '../', 'node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.2.js'),
      to: path.resolve(__dirname, '../', 'dist/')
    }
  ])
);

module.exports = webpackConfig;
