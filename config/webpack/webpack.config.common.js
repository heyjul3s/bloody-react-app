const assets = require('./modules/webpack.assets');
const merge = require('webpack-merge');
const scripts = require('./modules/webpack.scripts');
const settings = require('./settings');
const utilities = require('./modules/webpack.utilities');

module.exports = env => {
  return merge([
    utilities.generateSourceMaps({
      type: 'inline-source-map'
    }),
    utilities.clean(),
    {
      bail: true,
      entry: {
        app: settings.paths.app
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js']
      },
      output: {
        path: settings.paths.build,
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
    utilities.HTML(),
    utilities.assetManifest(),
    utilities.PWAmanifest(),
    utilities.caseSensitivePaths(),
    scripts.loadTypescript({ include: settings.paths.app }),
    scripts.loadJavaScript({
      include: settings.paths.app
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
