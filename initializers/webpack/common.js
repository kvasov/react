const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(process.cwd(), 'public', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(process.cwd(), 'src'),
          path.resolve(process.cwd(), 'initializers', 'server')
        ],
        use: ['babel-loader']
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
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules']
  }
};
