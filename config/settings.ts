// Global imports
import * as commandLineArgs from 'command-line-args';

// Utils, helpers, etc. imports
import { rootDir } from './helpers';

// Constants
const {
  run,
} = commandLineArgs([
  // Run options
  { name: 'env', alias: 'e', type: String, defaultValue: 'develop', group: ['run'] },
  { name: 'dist', alias: 'd', type: String, defaultValue: './dist', group: ['run'] },
  { name: 'publicPath', type: String, defaultValue: '/', group: ['run'] },

]) as CLI.Options;


// Main code
switch (run.env) {
  case 'd':
  case 'dev':
  case 'develop':
    run.env = 'develop';
    break;

  default:
    throw new Error('Not supported env type');
}


export const runOptions = {
  env: {
    isDevelop: run.env === 'develop',
  },
};

export const buildOptions = {
  distDir: rootDir(run.dist),
  publicPath: run.publicPath,
};


// Modules, interfaces, types declarations
export namespace CLI {
  export type EnvType = 'd' | 'dev' | 'develop';

  export interface Options {
    run: RunOptions;
  }


  interface RunOptions {
    env: EnvType;
    dist: string;
    publicPath: string;
  }
}