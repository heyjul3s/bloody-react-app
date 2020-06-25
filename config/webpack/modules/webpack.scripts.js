const settings = require('../settings');
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
          'cache-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  }
});

exports.forkTSchecker = (
  options = {
    // * async to false so that errors are displayed via webpack devserver overlay
    async: false,
    typescript: {
      configFile: settings.paths.tsconfig
    },
    eslint: {
      files: './src/**/*.{ts,tsx,js,jsx}'
    }
  }
) => ({
  plugins: [new ForkTsCheckerWebpackPlugin(options)]
});
