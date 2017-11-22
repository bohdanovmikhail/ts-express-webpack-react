TS Express Webpack React Boilerplate
====================================
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bohdanovmikhail/ts-express-webpack-react/blob/master/LICENSE)

Powerful React boilerplate based in TypeScript and running in express/webpack environment.

## Usage

```console
git clone https://github.com/bohdanovmikhail/ts-express-webpack-react.git
cd ts-express-webpack-react/
```

### npm
```console
npm install
npm start
```

### yarn
```console
yarn
yarn start
```

Now edit `src/components/main-page/index.tsx`.
Your changes will appear without reloading the browser page.

## Build
```console
npm run build:dev // Build project in develop mode
npm run build:prod // Build project in production mode
```

## Options
For run server with custom params, you can use 

#### Run options
`--env` - choose environment for run app
`--distPath` - directory to output compiled files
`--publicFilesPath` - path to files in site

#### Runtime options
`--watch` - enable watching for auto rebuild app
`--debug` - enable debug mode
`--hot` - enable hot module replacement

#### Develop mode
`--host` - set host address for start server
`--port` - set listen port in server

#### Production mode
`--compressOutput` - uglify output code


## Dependencies
* [Express](http://expressjs.com)
* [React](https://reactjs.org)
* [Webpack](https://webpack.js.org)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

## Resources

* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
