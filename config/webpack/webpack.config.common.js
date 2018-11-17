const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
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
    utilities.clean(config.paths.build),
    {
      bail: true,
      entry: {
        app: [
          '@babel/polyfill',
          config.paths.app
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js']
      },
      output: {
        path: config.paths.build,
        chunkFilename: '[name].[hash:8].js',
        filename: '[name].[hash:8].js',
      },
      plugins: [
        new HTMLWebpackPlugin({
          title: 'Bloody React App',
          template: config.paths.index
        }),
        new FaviconsWebpackPlugin({
          logo: config.paths.favicon,
          prefix: 'icons-[hash]/',
          emitStats: false,
          persistentCache: true,
          inject: true,
          title: 'Bloody React App',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        }),
        new CaseSensitivePathsPlugin(),
      ],
    },
    scripts.loadTypescript({ include: config.paths.app }),
    scripts.loadJavaScript({ include: config.paths.app }),
    styles.loadCSS(),
    assets.loadFonts({
      options: {
        name: '[name].[contenthash:4].[ext]',
      },
    }),
    assets.loadImages({
      options: {
        limit: 8000,
        name: "[name].[contenthash:4].[ext]",
      }
    }),
    assets.minifyImages(),
    assets.generateImageSizes(),
  ])
};