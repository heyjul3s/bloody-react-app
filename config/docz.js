const path = require('path');

export default {
  files: '**/*.{mdx}',
  typescript: true,
  src: path.resolve(__dirname, '../src')
};
