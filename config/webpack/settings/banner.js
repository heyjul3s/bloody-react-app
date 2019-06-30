const PWAmanifest = require('./pwa-manifest');

const banner = [PWAmanifest.name || 'Untitled', new Date()].join(' | ');

module.exports = {
  banner
};
