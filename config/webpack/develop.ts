// Global imports
import { extend } from 'lodash';

// Utils, helpers, etc. imports
import { rootDir, srcDir } from '../helpers';

// Constants
import common from './_common';

import { runtimeOptions, buildOptions } from '../settings';


// Main code
export const watchOptions = {
  aggregateTimeout: 300,
  pool: 1000,
  ignore: [
    rootDir('node_modules'),
  ],
};

export const devServerConfig = {
  watchOptions: runtimeOptions.watch ? watchOptions : null,
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
