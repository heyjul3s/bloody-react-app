const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GitRevision = require('git-revision-webpack-plugin');
const settings = require('../settings');

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

exports.banner = (options = settings.banner) => ({
  plugins: [new webpack.BannerPlugin(options)]
});

exports.PWAmanifest = (options = settings.PWAmanifestConfig) => ({
  plugins: [new WebpackPwaManifest(options)]
});

exports.assetManifest = (
  options = {
    fileName: 'asset-manifest.json'
  }
) => ({
  plugins: [new ManifestPlugin(options)]
});

exports.HTML = (options = settings.HTML.development) => ({
  plugins: [new HTMLWebpackPlugin(options)]
});

exports.caseSensitivePaths = () => ({
  plugins: [new CaseSensitivePathsPlugin()]
});

exports.analyseBundle = () => {
  if (process.env.ANALYSE_BUNDLE) {
    return {
      plugins: [new BundleAnalyzerPlugin()]
    };
  }
};
