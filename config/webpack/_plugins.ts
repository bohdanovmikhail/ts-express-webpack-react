// Global imports
import {
  optimize as webpackOptimize,
  ProgressPlugin,
} from 'webpack';
import * as HtmlPlugin from 'html-webpack-plugin';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants


// Main code
export default [
  new HtmlPlugin({
    template: srcDir('index.html'),
    chunks: ['main', 'vendors'],
  }),
  new ProgressPlugin(),
  new webpackOptimize.CommonsChunkPlugin({
    name: 'vendors',
    minChunks: Infinity,
  }),
];


// Modules, interfaces, types declarations
