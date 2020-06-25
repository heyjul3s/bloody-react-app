const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const settings = require('../settings');

exports.forkTSchecker = (
  options = {
    async: false,
    typescript: {
      configFile: settings.paths.tsconfig
    },
    eslint: {
      files: './src/**/*.{ts,tsx,js,jsx}'
    }
  }
) => new ForkTsCheckerWebpackPlugin(options);
