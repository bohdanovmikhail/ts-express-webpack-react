// Global imports
import { values } from 'lodash';

// Utils, helpers, etc. imports
import { rootDir, srcDir } from '../helpers';

// Constants
import plugins from './_plugins';
import loaders from './_loaders';


// Main code
export const entries = {
  main: [
    srcDir('index.ts'),
  ],
};

export default {
  plugins,

  context: srcDir(),
  entry: {
    ...entries,

    // TODO here must be all vendors
  },
  module: {
    rules: values(loaders),
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      srcDir(),
      rootDir('node_modules'),
    ],
  },
  resolveLoader: {
    extensions: ['.js', '.ts'],
  },
};


// Modules, interfaces, types declarations
