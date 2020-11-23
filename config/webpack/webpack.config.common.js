const assets = require('./modules/webpack.rules.assets');
const scripts = require('./modules/webpack.rules.scripts');
const settings = require('./settings');
const utils = require('./modules/webpack.plugins.utils');
const options = require('./modules/webpack.options');
const web = require('./modules/webpack.plugins.html');

module.exports = (env) => {
  return {
    ...options.config(),
    module: {
      rules: [
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
        }),
        scripts.loadTypescript({
          include: settings.paths.app
        }),
        scripts.loadJavaScript({
          include: settings.paths.app
        })
      ]
    },
    plugins: [
      utils.clean(),
      utils.defineEnv({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
          PLATFORM_ENV: JSON.stringify(env.PLATFORM_ENV)
        }
      }),
      web.HTML(settings.HTML[env.NODE_ENV]),
      web.PWAmanifest(),
      utils.caseSensitivePaths(),
      utils.analyseBundle()
    ]
  };
};
