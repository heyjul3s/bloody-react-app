const merge = require('webpack-merge');
const scripts = require('./modules/webpack.scripts');
const serve = require('./modules/webpack.serve');
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
