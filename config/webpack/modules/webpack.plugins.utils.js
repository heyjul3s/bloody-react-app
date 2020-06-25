const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GitRevision = require('git-revision-webpack-plugin');
const settings = require('../settings');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

exports.defineEnv = (options) => new webpack.DefinePlugin(options);

exports.clean = (
  options = {
    exclude: ['index', 'manifest'],
    dangerouslyAllowCleanPatternsOutsideProject: false
  }
) => new CleanWebpackPlugin(options);

// Generates Build Revision Info
// For obvious reasons, it must be an initiated git repo to work otherwise,
// it'll break. Oh, and not plugged in into the config. Just add it if you
// want to
exports.attachRevision = () =>
  new webpack.BannerPlugin({
    banner: new GitRevision().version()
  });

exports.banner = (options = settings.banner) =>
  new webpack.BannerPlugin(options);

exports.caseSensitivePaths = () => new CaseSensitivePathsPlugin();

exports.analyseBundle = () =>
  process.env.ANALYSE_BUNDLE ? new BundleAnalyzerPlugin() : () => {};
