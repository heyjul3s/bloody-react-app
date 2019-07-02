const settings = require('../settings');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

exports.loadJavaScript = ({ include, exclude = /node_modules/ }) => ({
  module: {
    rules: [
      {
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
      }
    ]
  }
});

exports.loadTypescript = ({ include, exclude = /node_modules|webpack/ }) => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include,
        exclude,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader',
            options: { workers: require('os').cpus().length - 1 }
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true
            }
          }
        ]
      }
    ]
  }
});

exports.minifyJavaScript = (options = {}) => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin(options)]
  }
});

exports.forkTSchecker = (
  options = {
    // async to false so that errors are displayed via webpack devserver overlay
    async: false,
    watch: settings.paths.app,
    tsconfig: settings.paths.tsconfig,
    tslint: settings.paths.tslint,
    checkSyntacticErrors: true
  }
) => ({
  plugins: [new ForkTsCheckerWebpackPlugin(options)]
});
