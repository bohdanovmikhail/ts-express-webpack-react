// Global imports
import {
  optimize as webpackOptimize,
  ProgressPlugin,
  DefinePlugin,
} from 'webpack';
import * as HtmlPlugin from 'html-webpack-plugin';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants
import { runtimeOptions } from '../settings';


// Main code
export default [
  new HtmlPlugin({
    template: srcDir('web', 'index.html'),
    chunks: ['main', 'vendors'],
  }),
  new ProgressPlugin(),
  new webpackOptimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: Infinity,
  }),
  new DefinePlugin({
    GLOBAL_DEBUG: JSON.stringify(runtimeOptions.debug),
  }),
];


// Modules, interfaces, types declarations
