const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const scripts = require('./modules/webpack.scripts');
const styles = require('./modules/webpack.styles');

const prodConfig = (env = { NODE_ENV: 'production', PLATFORM_ENV: 'web' }) => {
  return merge([
    {
      mode: env.NODE_ENV,
      performance: {
        hints: 'warning',
        maxEntrypointSize: 250000,
        maxAssetSize: 250000
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(env.NODE_ENV),
            PLATFORM_ENV: JSON.stringify(env.PLATFORM_ENV),
          }
        }),
      ],
    },
    styles.extractCSS(),
    scripts.minifyJavaScript(),
  ]);
};

module.exports = env => merge(commonConfig(env), prodConfig(env));
