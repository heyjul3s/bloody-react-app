const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GitRevision = require('git-revision-webpack-plugin');
const config = require('./../webpack.config.constants');

exports.defineEnv = options => ({
  plugins: [new webpack.DefinePlugin(options)]
});

exports.clean = (
  options = {
    exclude: ['index', 'manifest'],
    dangerouslyAllowCleanPatternsOutsideProject: false
  }
) => ({
  plugins: [new CleanWebpackPlugin(options)]
});

// Generates Build Revision Info
// For obvious reasons, it must be an initiated git repo to work otherwise,
// it'll break. Oh, and not plugged in into the config. Just add it if you
// want to
exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevision().version()
    })
  ]
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type
});

exports.PWAmanifest = (
  options = {
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
  }
) => ({
  plugins: [new WebpackPwaManifest(options)]
});

exports.assetManifest = (
  options = {
    fileName: 'asset-manifest.json'
  }
) => ({
  plugins: [new ManifestPlugin(options)]
});

exports.HTML = (
  options = {
    title: 'Bloody React App',
    template: config.paths.index
  }
) => ({
  plugins: [new HTMLWebpackPlugin(options)]
});

exports.caseSensitivePaths = () => ({
  plugins: [new CaseSensitivePathsPlugin()]
});
