const webpack = require('webpack');
const CleanWebpack = require('clean-webpack-plugin');
const GitRevision = require('git-revision-webpack-plugin');

exports.clean = (
  path,
  options = {
    exclude: ['index', 'manifest'],
    allowExternal: true
}) => ({
  plugins: [
    new CleanWebpack([path], options),
  ],
});

// Generates Build Revision Info
// For obvious reasons, it must be an initiated git repo to work otherwise,
// it'll break. Oh, and not plugged in into the config. Just add it if you
// want to
exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevision().version(),
    }),
  ],
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});
