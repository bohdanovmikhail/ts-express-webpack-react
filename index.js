// Global imports
const path = require('path');
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');

const HtmlPlugin = require('html-webpack-plugin');

// Utils, helpers, etc. imports

// Constants

// TODO move this configs to external file
const WEBPACK_CONFIG = {
  context: path.resolve('./src'),
  entry: {
    main: ['./index.js']
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      './src',
      './node_modules'
    ]
  },
  resolveLoader: {
    extensions: ['.js', '.ts']
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html'
    })
  ]
};
const DEV_SERVER_CONFIG = {
  publicPath: '/',
  historyApiFallback: true,
  contentBase: './src',
  stats: {
    colors: true
  }
};


const compiler = webpack(WEBPACK_CONFIG);
const devServer = new DevServer(compiler, DEV_SERVER_CONFIG);
devServer.listen(3000, 'localhost');
