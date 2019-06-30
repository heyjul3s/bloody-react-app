const path = require('path');
const paths = require('./paths');
const icons = require('./icons');

const favIcons = (() => {
  return [
    {
      src: paths.favicon,
      sizes: '32x32'
    }
  ].concat(
    Object.entries(icons).map(([icon, props]) => ({
      ...props,
      src: paths.favicon,
      destination: path.join('icons', icon)
    }))
  );
})();

exports.PWAmanifestConfig = {
  name: 'React App',
  short_name: 'React',
  description:
    'A basic Typescript React app boilerplate to help you get started',
  background_color: '#ffffff',
  icons: favIcons
};
