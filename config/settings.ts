// Global imports
import * as commandLineArgs from 'command-line-args';

// Utils, helpers, etc. imports
import { rootDir } from './helpers';

// Constants
const {
  run,
  runtime,
  develop,
  production,
} = commandLineArgs([
  // Run options
  { name: 'env', alias: 'e', type: String, group: ['run'] },
  { name: 'distPath', alias: 'd', type: String, defaultValue: './dist', group: ['run'] },
  { name: 'publicFilesPath', type: String, defaultValue: '/', group: ['run'] },

  // Runtime options
  { name: 'watch', type: Boolean, defaultValue: false, group: ['runtime'] },

  // Develop mode
  { name: 'host', type: String, defaultValue: 'localhost', group: ['develop'] },
  { name: 'port', type: Number, defaultValue: 3000, group: ['develop'] },

  // Production mode
  { name: 'compressOutput', type: Boolean, defaultValue: false, group: ['production'] },

]) as CLI.Options;


// Main code
switch (run.env) {
  case 'd':
  case 'dev':
  case 'develop':
    run.env = 'develop';
    break;
  case 'p':
  case 'prod':
  case 'production':
    run.env = 'production';
    break;

  default:
    throw new Error('Not supported env type');
}


export const runOptions = {
  env: {
    isDevelop: run.env === 'develop',
    isProduction: run.env === 'production',
  },
};

export const runtimeOptions = {
  watch: runtime.watch,
};

export const buildOptions = {
  distDir: rootDir(run.distPath),
  publicFilesPath: run.publicFilesPath,
};

export const developMode = {
  host: develop.host,
  port: develop.port,
};

export const productionMode = {
  compressOutput: production.compressOutput,
};


// Modules, interfaces, types declarations
export namespace CLI {
  export type EnvType = 'd' | 'dev' | 'develop' |
                        'p' | 'prod' | 'production';

  export interface Options {
    run: RunOptions;
    runtime: RuntimeOptions;
    develop: DevelopModeOptions;
    production: ProductionModeOptions;
  }


  interface RunOptions {
    env: EnvType;
    distPath: string;
    publicFilesPath: string;
  }

  interface RuntimeOptions {
    watch: boolean;
  }

  interface DevelopModeOptions {
    host: string;
    port: number;
  }

  interface ProductionModeOptions {
    compressOutput: boolean;
  }

}
