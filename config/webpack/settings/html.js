const paths = require('./paths');

const HTMLwebpackConfigDefault = {
  title: 'React App',
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

exports.development = {
  ...HTMLwebpackConfigDefault
};

exports.production = {
  ...HTMLwebpackConfigDefault,
  ...HTMLWebpackMinifyConfig
};
