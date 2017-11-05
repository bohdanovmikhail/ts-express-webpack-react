// Global imports
import { extend } from 'lodash';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants
import common from './_common';

import { buildOptions } from '../settings';


// Main code
export const devServerConfig = {
  publicPath: buildOptions.publicPath,
  contentBase: srcDir(),
  stats: {
    colors: true,
  },
};

export default extend({}, common, {
  output: {
    path: buildOptions.distDir,
    publicPath: buildOptions.publicPath,

    filename: '[name].js?[hash]',
    sourceMapFilename: '[name].map?[hash]',
    chunkFilename: '[id].js?[hash]',
  },
});


// Modules, interfaces, types declarations
