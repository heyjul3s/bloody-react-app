const webpack = require('webpack');
const settings = require('../settings');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only',
  host,
  port,
  open: false,
  overlay: {
    errors: true,
    warnings: true
  }
});

exports.HMR = () => new webpack.HotModuleReplacementPlugin();

exports.browserSync = () =>
  new BrowserSyncPlugin(
    {
      host: settings.server.host,
      port: settings.server.port,
      proxy: settings.server.proxy,
      open: false
    },
    {
      reload: false
    }
  );
