const commonConfig = require('./webpack.config.common');
const merge = require('webpack-merge');
const scripts = require('./modules/webpack.scripts');
const serve = require('./modules/webpack.serve');
const settings = require('./settings');
const utilities = require('./modules/webpack.utilities');

const devConfig = (env = { NODE_ENV: 'development', PLATFORM_ENV: 'web' }) => {
  return merge([
    {
      mode: env.NODE_ENV,
      performance: {
        hints: false
      }
    },
    utilities.banner(),
    scripts.forkTSchecker(),
    serve.browserSync(),
    serve.devServer({
      open: false,
      host: settings.server.host,
      port: settings.server.port
    })
  ]);
};

module.exports = env => merge(commonConfig(env), devConfig(env));
