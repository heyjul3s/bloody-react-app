const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const prodConfig = (env = { NODE_ENV: 'production', PLATFORM_ENV: 'web' }) => {
  return {
    mode: env.NODE_ENV,
    optimization: {
      minimize: true
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 250000,
      maxAssetSize: 250000
    }
  };
};

module.exports = (env) => merge(commonConfig(env), prodConfig(env));
