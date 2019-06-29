const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const scripts = require('./modules/webpack.scripts');

const prodConfig = (env = { NODE_ENV: 'production', PLATFORM_ENV: 'web' }) => {
  return merge([
    {
      mode: env.NODE_ENV,
      performance: {
        hints: 'warning',
        maxEntrypointSize: 250000,
        maxAssetSize: 250000
      }
    },
    scripts.minifyJavaScript()
  ]);
};

module.exports = env => merge(commonConfig(env), prodConfig(env));
