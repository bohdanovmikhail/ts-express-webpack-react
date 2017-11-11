// Global imports
import {
  optimize as webpackOptimize,
  ProgressPlugin,
  DefinePlugin,
} from 'webpack';
import * as HtmlPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants
import { runOptions, runtimeOptions } from '../settings';


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
  new ExtractTextPlugin({
    filename: runOptions.env.isProduction ? 'styles.[hash].css' : 'styles.css',
    allChunks: true,
    disable: runOptions.env.isDevelop,
  }),
  new DefinePlugin({
    GLOBAL_DEBUG: JSON.stringify(runtimeOptions.debug),
  }),
];


// Modules, interfaces, types declarations
