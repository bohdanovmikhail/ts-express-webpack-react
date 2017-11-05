// Global imports
import * as webpack from 'webpack';
import * as DevServer from 'webpack-dev-server';

// Utils, helpers, etc. imports

// Constants
import {
  developEnv,
  devServerConfig,
  webpackWatchConfig,

  productionEnv,
} from './config/webpack';

import {
  runOptions,
  runtimeOptions,
  developMode,
} from './config/settings';


// Main code
let webpackCompiler;
let webpackDevServer;
if (runOptions.env.isDevelop) {
  webpackCompiler = webpack(developEnv);

  if (runtimeOptions.watch) {
    webpackDevServer = new DevServer(webpackCompiler, devServerConfig);
    webpackDevServer.listen(developMode.port, developMode.host);

  } else {
    webpackCompiler.run(() => {});
  }

} else if (runOptions.env.isProduction) {
  webpackCompiler = webpack(productionEnv);

  if (runtimeOptions.watch) {
    webpackCompiler.watch(webpackWatchConfig, () => {});

  } else {
    webpackCompiler.run(() => {});
  }
}
