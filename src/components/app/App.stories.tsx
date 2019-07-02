import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import { App } from './App';
import results from '../../../.jest-test-results.json';

storiesOf('App', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .addDecorator(
    withTests({
      results
    })
  )
  .addDecorator(jsxDecorator)
  .add(
    'App',
    () => {
      return <App />;
    },
    {
      jest: ['App.test.tsx']
    }
  );
