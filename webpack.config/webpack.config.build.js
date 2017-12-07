const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const Config = Object.assign({}, baseConfig);

Config.plugins = [
  new BundleAnalyzerPlugin(),
  new UglifyJSPlugin(
    {
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    }),
];

module.exports = Config;