# Bloody React App
A basic Webpack 4+ starter kit for React 16+ apps.

This kit has:
  - ReactJS
  - Jest/Enzyme
  - Typescript
  - TS Lint
  - SASS/SCSS
  - SASS/SCSS Lint
  - Webpack 4
  - BrowserSync
  - Pre-commit and pre-push hooks via Husky

The rest is entirely up to you to add-on and extend (eg. middleware, store, persistence, etc.). At the moment, no service workers are included in this kit so if you need one you will have to add one yourself.

## Usage

`npm start` to run locally for development and `npm run build` to bundle a production ready version. Other NPM scripts include:

  - `npm test` runs jest
  - `npm run test-changed` runs jest
  - `npm run test-watch` runs jest in watch mode
  - `npm run test-clear-snaps` to clear jest snapshots
  - `npm run prettify` to run prettify