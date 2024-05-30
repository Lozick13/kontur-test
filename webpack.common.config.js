const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src', 'js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ЛДС',
      filename: 'index.html',
      template: './src/index.html',
      favicon: './src/favicon/favicon.ico',
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['build'],
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/fonts',
          to: './fonts',
        },
        {
          from: './src/favicon',
          to: './favicon',
        },
        {
          from: './src/img',
          to: './img',
        },
        {
          from: './src/uploads',
          to: './uploads',
        },
      ],
    }),
  ],
};
