const commonConfig = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const scripts = require('./modules/webpack.plugins.scripts');
const serve = require('./modules/webpack.plugins.serve');
const settings = require('./settings');
const utils = require('./modules/webpack.plugins.utils');

const devConfig = (env = { NODE_ENV: 'development' }) => {
  return {
    mode: env.NODE_ENV,
    performance: {
      hints: false
    },
    devServer: serve.devServer({
      open: false,
      host: settings.server.host,
      port: settings.server.port
    }),
    plugins: [
      utils.banner(),
      scripts.forkTSchecker(),
      serve.browserSync(),
      serve.HMR()
    ]
  };
};

module.exports = (env) => merge(commonConfig(env), devConfig(env));
