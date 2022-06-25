const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './render/app.tsx'),
    setting: path.resolve(__dirname, './windowPages/setting/app.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  // target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.module\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                // localIdentName: '[local]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.normal\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(jpg|png|jpe?g|gif|svg)$/,
        type: 'asset/inline',
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, './dist'),
    compress: true,
    port: 9000,
    host: '127.0.0.1',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './render/index.html'),
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './windowPages/setting/index.html'),
      filename: path.resolve(__dirname, './dist/setting.html'),
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
