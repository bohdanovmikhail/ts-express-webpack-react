// Global imports
import {
  NamedModulesPlugin,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
} from 'webpack';
import { extend } from 'lodash';

// Utils, helpers, etc. imports
import { rootDir, srcDir } from '../helpers';

// Constants
import common, { entries } from './_common';
import plugins from './_plugins';

import {
  runtimeOptions,
  buildOptions,
  developMode,
} from '../settings';


// Main code
plugins.push(new NamedModulesPlugin());

if (runtimeOptions.hot) {
  entries.main.unshift(
    `webpack-dev-server/client?http://${developMode.host}:${developMode.port}`,
    'webpack/hot/only-dev-server',
  );

  plugins.push(new HotModuleReplacementPlugin());
  plugins.push(new NoEmitOnErrorsPlugin());
}

export const watchOptions = {
  aggregateTimeout: 300,
  pool: 1000,
  ignore: [
    rootDir('node_modules'),
  ],
};

export const devServerConfig = {
  watchOptions: runtimeOptions.watch ? watchOptions : null,
  hot: runtimeOptions.hot,
  inline: runtimeOptions.hot,
  publicPath: buildOptions.publicFilesPath,
  contentBase: srcDir(),
  stats: {
    colors: true,
  },
};

export default extend({}, common, {
  devtool: 'cheap-inline-module-source-map',
  output: {
    path: buildOptions.distDir,
    publicPath: buildOptions.publicFilesPath,

    filename: '[name].js?[hash]',
    sourceMapFilename: '[name].map?[hash]',
    chunkFilename: '[id].chunk.js?[hash]',
  },
});


// Modules, interfaces, types declarations
