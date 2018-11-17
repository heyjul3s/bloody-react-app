const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSS = require('purifycss-webpack');
const OptimiseCSSAssets = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include,
        exclude,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});

exports.extractCSS = ({ include, exclude = /node_modules/ } = {}) => {
  const flexbugsFixes = require('postcss-flexbugs-fixes');
  const autoprefixer = require('autoprefixer');

  const plugin = new MiniCssExtractPlugin({
    filename: "[name].[contenthash:4].css",
    chunkFilename: "[name].[contenthash:4].css",
  });

  const postcss = {
    loader: 'postcss-loader',
    options: {
      plugins: () => ([
        flexbugsFixes,
        autoprefixer({
          flexbox: 'no-2009',
        })
      ]),
    },
  };

  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          include,
          exclude,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            postcss,
            'sass-loader',
          ]
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.purifyCSS = ({ paths }) => ({
  plugins: [
    new PurifyCSS({ paths }),
  ],
});

exports.lintCSS = ({ include, exclude }) => ({
  module: {
    rules: [{
      test: /\.css$/,
      include,
      exclude,
      enforce: 'pre',
      loader: 'postcss-loader',
      options: {
        plugins: () => (
          [
            require('stylelint')({
              ignoreFiles: 'node_modules/**/*.css',
            }),
          ]
        ),
      },
    }],
  },
});

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimiseCSSAssets({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
});
