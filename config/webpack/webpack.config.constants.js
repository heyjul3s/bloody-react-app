const path = require('path');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;
const DIR_PATH = path.join.bind(this, __dirname);

const config = {
  paths: {
    app: DIR_PATH('../../src'),
    build: DIR_PATH('../../build'),
    index: DIR_PATH('../../src/index.html'),
    tslint: DIR_PATH('../../tslint.json'),
    tsconfig: DIR_PATH('../../tsconfig.json'),
    favicon: DIR_PATH('../../src/assets/images/1900px-webpack_logo.png')
  },
  server: {
    host: HOST,
    port: PORT,
    proxy: PROXY
  }
};

module.exports = config;
