// Global imports
import {
  optimize as webpackOptimize,
  DefinePlugin,
} from 'webpack';
import { extend } from 'lodash';

// Utils, helpers, etc. imports

// Constants
import common from './_common';
import plugins from './_plugins';

import {
  runOptions,
  buildOptions,
  productionMode,
} from '../settings';


// Main code
if (runOptions.env.isProduction) {
  plugins.push(new webpackOptimize.AggressiveMergingPlugin({
    minSizeReduce: 1.5,
    moveToParents: true,
  }));
  plugins.push(new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));

  if (productionMode.compressOutput) {
    plugins.push(new webpackOptimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        collapse_vars: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        if_return: true,
        join_vars: true,
        properties: true,
        reduce_vars: true,
        unsafe: true,
        unused: true,
        warnings: true,
      },
    }));
  }
}

export default extend({}, common, {
  devtool: 'source-map',
  output: {
    path: buildOptions.distDir,
    publicPath: buildOptions.publicFilesPath,

    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: '[id].[hash].chunk.js',
  },
});


// Modules, interfaces, types declarations
