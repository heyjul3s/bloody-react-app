import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
  const req = require.context('../src/', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => {
    if (filename.includes('node_modules')) {
      return;
    }
    return req(filename);
  });
}

setAddon(JSXAddon);

configure(loadStories, module);
