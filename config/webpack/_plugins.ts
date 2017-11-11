// Global imports
import {
  optimize as webpackOptimize,
  ProgressPlugin,
} from 'webpack';
import * as HtmlPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants
import { runOptions } from '../settings';


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
  new ExtractTextPlugin({
    filename: runOptions.env.isProduction ? 'styles.[hash].css' : 'styles.css',
    allChunks: true,
    disable: runOptions.env.isDevelop,
  }),
];


// Modules, interfaces, types declarations
