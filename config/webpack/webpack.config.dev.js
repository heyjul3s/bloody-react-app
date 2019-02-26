const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const styles = require('./modules/webpack.styles');
const serve = require('./modules/webpack.serve');
const commonConfig = require('./webpack.config.common');
const config = require('./webpack.config.constants');

const devConfig = (env = { NODE_ENV:'development', PLATFORM_ENV:'web' }) => {
  return merge([
    {
      mode: env.NODE_ENV,
      performance: {
        hints: false,
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(env.NODE_ENV),
            PLATFORM_ENV: JSON.stringify(env.PLATFORM_ENV),
          }
        }),
        new BrowserSyncPlugin(
          {
            host: config.server.host,
            port: config.server.port,
            proxy: config.server.proxy,
          },
          {
            reload: false
          }
        ),
        new ForkTsCheckerWebpackPlugin({
          // async to false so that errors are displayed via webpack devserver overlay
          async: false,
          watch: config.paths.app,
          tsconfig: config.paths.tsconfig,
          tslint: config.paths.tslint,
          checkSyntacticErrors: true
        })
      ],
    },
    styles.lintCSS({ include: config.paths.app }),
    serve.devServer({
      open: false,
      host: config.server.host,
      port: config.server.port,
    }),
  ]);
};

module.exports = env => merge(commonConfig(env), devConfig(env));
