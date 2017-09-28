var path = require('path');

module.exports = {

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
  },

  entry: {
    'main': './src/index.ts',
  },

  output: {
    path: path.resolve(__dirname, "dist")
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader'},
    ]
  },

  devtool: 'cheap-module-source-map',
};
