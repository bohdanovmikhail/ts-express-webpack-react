// Global imports
import * as HtmlPlugin from 'html-webpack-plugin';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants


// Main code
export default [
  new HtmlPlugin({
    template: srcDir('index.html'),
  }),
];


// Modules, interfaces, types declarations
