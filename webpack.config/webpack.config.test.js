const {readFileSync} = require('fs');
const glob = require("glob");

const WebpackTapeRun = require('webpack-tape-run');
const babelSettings = JSON.parse(readFileSync(__dirname + '/../.babelrc'));

module.exports = {
  entry: glob.sync(__dirname + '/../src/**/**/*.spec.js'),
  node: {
    fs: 'empty'
  },
  output: {
    path: __dirname + '/../output',
    filename: 'test.js'
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
        use: [{
          loader: 'svelte-loader',
          options: {
            store: true
          }
        }]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js']
  },
  plugins: [
    new WebpackTapeRun({
      reporter: 'tap-spec'
    })
  ]
};