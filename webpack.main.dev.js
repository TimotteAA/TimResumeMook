const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: {
    electron: path.resolve(__dirname, './main/electron.js'),
    preload: path.resolve(__dirname, './main/preload.js'),
  },
  target: 'electron-main',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = webpackMerge.merge(mainConfig, baseConfig);
