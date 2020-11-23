const settings = require('../settings');

const baseOptions = {
  bail: true,
  devtool: 'inline-source-map',
  entry: {
    app: settings.paths.app
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    path: settings.paths.build,
    chunkFilename: '[name].[fullhash:8].js',
    filename: '[name].[fullhash:8].js'
  },
  externals: {}
};

exports.config = (options = {}) => ({
  ...baseOptions,
  ...options
});
