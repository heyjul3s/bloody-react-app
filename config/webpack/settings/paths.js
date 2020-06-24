const path = require('path');
const DIR_PATH = path.join.bind(this, __dirname);

module.exports = {
  app: DIR_PATH('../../../src'),
  build: DIR_PATH('../../../build'),
  favicon: DIR_PATH('../../../src/assets/images/1900px-webpack_logo.png'),
  HTMLtemplate: DIR_PATH('../../../src/index.html'),
  tsconfig: DIR_PATH('../../../config/tsconfig.json')
};
