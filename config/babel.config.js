module.exports = {
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime'
  ],
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: true }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  env: {
    development: {
      presets: [
        ['@babel/preset-env', { debug: true }],
        ['@babel/preset-react', { development: true, useBuiltIns: true }]
      ],
      plugins: ['react-hot-loader/babel']
    },
    production: {
      presets: ['minify']
    }
  }
};
