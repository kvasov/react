const webpack = require('webpack');
const path = require('path');

// require('app-module-path').addPath(__dirname);

const PATHS = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: `${PATHS.source}/index.js`,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
};
