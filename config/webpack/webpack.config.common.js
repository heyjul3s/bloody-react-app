const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const scripts = require('./modules/webpack.scripts');
const styles = require('./modules/webpack.styles');
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
      },
      plugins: [
        new WebpackPwaManifest({
          name: 'BloodyReactApp',
          short_name: 'BloodyReact',
          description:
            'A basic Typescript React app boilerplate to help you get started sans middleware store.',
          background_color: '#ffffff',
          icons: [
            {
              src: config.paths.favicon,
              sizes: [96, 128, 192, 256, 384, 512]
            }
          ]
        }),
        new ManifestPlugin({
          fileName: 'asset-manifest.json'
        }),
        new HTMLWebpackPlugin({
          title: 'Bloody React App',
          template: config.paths.index
        }),
        new CaseSensitivePathsPlugin()
      ]
    },
    scripts.loadTypescript({ include: config.paths.app }),
    scripts.loadJavaScript({ include: config.paths.app }),
    styles.loadCSS(),
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
