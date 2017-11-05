// Global imports

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants


// Main code
export default {
  typescript: {
    test: /\.tsx?$/,
    include: [
      srcDir(),
    ],
    use: 'awesome-typescript-loader',
  },
};


// Modules, interfaces, types declarations
