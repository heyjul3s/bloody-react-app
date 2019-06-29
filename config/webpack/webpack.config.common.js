const merge = require('webpack-merge');
const scripts = require('./modules/webpack.scripts');
const assets = require('./modules/webpack.assets');
const utilities = require('./modules/webpack.utilities');
const config = require('./webpack.config.constants');

module.exports = env => {
  return merge([
    utilities.generateSourceMaps({
      type: 'inline-source-map'
    }),
    utilities.clean(),
    {
      bail: true,
      entry: {
        app: config.paths.app
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js']
      },
      output: {
        path: config.paths.build,
        chunkFilename: '[name].[hash:8].js',
        filename: '[name].[hash:8].js'
      }
    },
    utilities.defineEnv({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        PLATFORM_ENV: JSON.stringify(env.PLATFORM_ENV)
      }
    }),
    utilities.PWAmanifest(),
    utilities.assetManifest(),
    utilities.HTML(),
    utilities.caseSensitivePaths(),
    scripts.loadTypescript({ include: config.paths.app }),
    scripts.loadJavaScript({
      include: config.paths.app,
      exclude: config.paths.storybbook
    }),
    assets.loadFonts({
      options: {
        name: '[name].[hash:4].[ext]'
      }
    }),
    assets.loadImages({
      options: {
        limit: 8000,
        name: 'static/images/[name].[hash:4].[ext]'
      }
    })
  ]);
};
