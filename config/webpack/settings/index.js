const paths = require('./paths');
const html = require('./html');
const icons = require('./icons');
const PWAmanifest = require('./pwa-manifest');
const server = require('./server');
const banner = require('./banner');

module.exports = {
  paths: { ...paths },
  server: { ...server },
  ...html,
  ...icons,
  ...PWAmanifest,
  banner
};
