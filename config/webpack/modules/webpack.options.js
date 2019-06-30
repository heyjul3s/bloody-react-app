const settings = require('../settings');

const baseOptions = {
  bail: true,
  devtool: 'inline-source-map',
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
};

exports.config = (options = {}) => ({
  ...baseOptions,
  ...options
});
