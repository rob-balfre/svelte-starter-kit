const path = require('path');
const {readFileSync} = require('fs');
const babelSettings = JSON.parse(readFileSync(__dirname + '/../.babelrc'));

module.exports = {
  entry: {
    'index': ['./src/index.js']
  },
  resolve: {
    extensions: ['.js', '.html']
  },
  output: {
    path: __dirname + '/../public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, "/../public"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};