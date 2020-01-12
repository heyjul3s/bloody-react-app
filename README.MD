# Bloody React App

A basic Webpack 4.34 starter kit for React 16+ apps.

This kit has:

- ReactJS
- Jest
- Typescript
- ESLint
- Styled Components with Styled System
- Webpack 4.41+
- BrowserSync
- Docz
- App manifest (manifest.json) and asset manifest (asset-manifest.json)

The rest is entirely up to you to add-on and extend (eg. middleware, store, persistence, etc.). At the moment, no service workers are included in this kit so if you need one you will have to add one yourself.

## Overview

Bloody React App was started partly, for usage as a boilerplate template for personal React projects and the other being a pseudo reference of sorts for others who are keen to get their hands dirty in the configuration instead of fully relying on third party tools like Create React App. This template is also designed to be modular and you can customise it to your liking. Hopefully, this template repo will offer you some insights and or some ideas on how you can implement and structure your own configuration for your projects.

## Getting Started

To use this repo, you can simply run:
`npx degit heyjul3s/bloody-react-app my-react-project`

or do it the old-fashioned way:
`git clone https://github.com/heyjul3s/bloody-react-app.git`

## Usage

`yarn start` to run locally for development and `yarn build` to bundle a production ready version. That's it. Other NPM scripts include:

| Script                   | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `yarn start`             | Starts up a local dev server for development     |
| `yarn build`             | Builds the project for production                |
| `yarn profile-build`     | Builds the project with stats                    |
| `yarn test`              | Runs Jest once for all your tests                |
| `yarn test-changed`      | Runs Jest on changed files                       |
| `yarn test-watch`        | Runs Jest and watch for changes in files         |
| `yarn test-update-snaps` | Updates Jest snapshots                           |
| `yarn prettify`          | Run prettify to format your code                 |
| `yarn docz-dev`          | Run Docz locally                                 |
| `yarn docz-build`        | Builds Docz                                      |
| `yarn docz-serve`        | Builds Docz and subsequently serves the instance |

## Structure

Below is an overview the structure

```
./
├── .storybook/
├── config/
│   └── webpack
│     └── modules
│       └── webpack.assets.js
│       └── webpack.options.js
│       └── webpack.scripts.js
│       └── webpack.serve.js
│       └── webpack.utilities.js
│     └── settings
│       └── banner.js
│       └── html.js
│       └── icons.js
│       └── index.js
│       └── paths.js
│       └── pwa-manifest.js
│       └── server.js
│     └── webpack.config.common.js
│     └── webpack.config.dev.js
│     └── webpack.config.prod.js
│   └── enzyme.config.ts
├── src/
│   └── assets/
│   └── components/
│   └── theme/
│   └── typings/
│   └── index.html
│   └── index.tsx
```

### Modules

This directory contains Webpack functions split into in its own domain. These functions are then imported into the main webpack configs ie. webpack.config.common.js, webpack.config.dev.js and webpack.config.prod.js for usage. You may write your own and include them into the existing modules or create a new one yourself if you wish.

### Settings

The settings directory is where all the "constant" values of the app are. These values include paths and default configuration values for numerous plugins used in the webpack config. Configuration values can simply be overriden by passing them into the module function you desire, for example:

**_config/webpack/webpack.config.common.js_**

```
...
module.exports = env => {
  return merge([
    options.config({
      stats: 'errors-only'
    }),
...
```

## Final Thoughts

...Is it actually pronounced as Github or Jithub or Jeet-Thoob? ....We'll probably never find out.
