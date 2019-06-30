const paths = require('./paths');

const HTMLwebpackConfigDefault = {
  title: 'Some TItle',
  template: paths.HTMLtemplate
};

const HTMLWebpackMinifyConfig = {
  minify: {
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
};

exports.HTMLwebpackConfig =
  process.env.NODE_ENV === 'production'
    ? { ...HTMLwebpackConfigDefault, ...HTMLWebpackMinifyConfig }
    : HTMLwebpackConfigDefault;
