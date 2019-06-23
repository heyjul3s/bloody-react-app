# Bloody React App

A basic Webpack 4.34 starter kit for React 16+ apps. Run `git clone https://github.com/heyjul3s/bloody-react-app` and then run `npm install` in the directory.

This kit has:

- ReactJS
- Jest/Enzyme
- Typescript
- TS Lint
- SASS/SCSS
- SASS/SCSS Lint
- Webpack 4.34
- BrowserSync
- Pre-commit and pre-push hooks via Husky
- App manifest (manifest.json) and asset manifest (asset-manifest.json)

The rest is entirely up to you to add-on and extend (eg. middleware, store, persistence, etc.). At the moment, no service workers are included in this kit so if you need one you will have to add one yourself.

## Overview

Bloody React App was started partly, for usage as a boilerplate template for React projects and the other being a pseudo reference of sorts for others who are keen to get their hands dirty in the configuration instead of fully relying on third party tools like Create React App. Even though this is targeted at ReactJS, you can swap it out and use your preferred library/framework instead and hopefully, this template repo will offer you some insights and or some ideas on how you can implement and structure your own configuration for your projects.

## Usage

`yarn start` to run locally for development and `yarn build` to bundle a production ready version. That's it. Other NPM scripts include:

| Script                   | Description                              |
| ------------------------ | ---------------------------------------- |
| `yarn test`              | Runs Jest once                           |
| `yarn test-changed`      | Runs Jest on changed files               |
| `yarn test-watch`        | Runs Jest and watch for changes in files |
| `yarn test-clear-snaps`  | Clear Jest snapshots                     |
| `yarn prettify`          | Run prettify to format your code         |
| `yarn storybook`         | Run storybook locally                    |
| `yarn storyshots`        | Run storyshots to create snapshots       |
| `yarn storyshots-update` | Update your storybook snapshots          |

## Final Word

...Is it actually pronounced as Github or Jithub or Jeet-Thoob? ....We'll probably never find out.
