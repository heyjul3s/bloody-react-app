const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const styles = require('./modules/webpack.styles');
const scripts = require('./modules/webpack.scripts');
const serve = require('./modules/webpack.serve');
const utilities = require('./modules/webpack.utilities');
const commonConfig = require('./webpack.config.common');
const config = require('./webpack.config.constants');

const devConfig = (env = { NODE_ENV: 'development', PLATFORM_ENV: 'web' }) => {
  return merge([
    {
      mode: env.NODE_ENV,
      performance: {
        hints: false
      }
    },
    styles.lintCSS({ include: config.paths.app }),
    scripts.forkTSchecker(),
    serve.browserSync(),
    serve.devServer({
      open: false,
      host: config.server.host,
      port: config.server.port
    })
  ]);
};

module.exports = env => merge(commonConfig(env), devConfig(env));
