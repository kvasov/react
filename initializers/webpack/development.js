const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    hot: true,
    historyApiFallback: true
  }
});
