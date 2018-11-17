exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(gif|bmp|png|jpg|svg)$/,
        include,
        exclude,
        use: [
          {
            loader: 'lqip-loader',
            options: {
              base64: true,
              palette: false
            }
          },
          {
            loader: 'url-loader',
            options,
          },
        ],
      },
    ],
  },
});

exports.minifyImages = ({ query } = {}) => ({
  module: {
    rules: [{
      test: /.*\.(gif|png|jpe?g)$/i,
      use: [
        {
          loader: 'image-webpack-loader',
          query,
        },
      ],
    }],
  },
});

exports.generateImageSizes = ({ options } = {}) => ({
  module: {
    rules: [{
      test: /.*\.(gif|png|jpe?g)$/i,
      use: [
        {
          loader: 'responsive-loader',
          options,
        },
      ],
    }],
  },
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [{
      test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      include,
      exclude,
      use: {
        loader: 'file-loader',
        options,
      },
    }],
  },
});
