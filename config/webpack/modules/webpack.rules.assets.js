exports.loadImages = ({ include, exclude, options } = {}) => ({
  test: /\.(gif|png|jpg|svg|webp)$/,
  include,
  exclude,
  use: {
    loader: 'url-loader',
    options
  }
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
  include,
  exclude,
  use: {
    loader: 'file-loader',
    options
  }
});
