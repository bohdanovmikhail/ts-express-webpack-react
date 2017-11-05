// Global imports
import { Rule } from 'webpack';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants
import {
  runOptions,
  runtimeOptions,
} from '../settings';

const TS_LOADERS = [
  'awesome-typescript-loader',
];
if (
  runOptions.env.isDevelop &&
  runtimeOptions.watch &&
  runtimeOptions.hot
) {
  TS_LOADERS.unshift('react-hot-loader');
}


// Main code
export default {
  typescript: {
    test: /\.tsx?$/,
    include: [
      srcDir(),
    ],
    use: TS_LOADERS,
  },
};


// Modules, interfaces, types declarations
