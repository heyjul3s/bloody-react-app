const webpack = require('webpack');
const config = require('./../webpack.config.constants');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
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
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

exports.browserSync = () => ({
  plugins: [
    new BrowserSyncPlugin(
      {
        host: config.server.host,
        port: config.server.port,
        proxy: config.server.proxy
      },
      {
        reload: false
      }
    )
  ]
});
