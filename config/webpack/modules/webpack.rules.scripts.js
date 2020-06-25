const settings = require('../settings');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.loadJavaScript = ({ include, exclude = /node_modules/ }) => ({
  test: /\.jsx?$/,
  include,
  exclude,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      '@babel/preset-env'
    ]
  }
});

exports.loadTypescript = ({ include, exclude = /node_modules|webpack/ }) => ({
  test: /\.tsx?$/,
  include,
  exclude,
  use: [
    'cache-loader',
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ]
});
