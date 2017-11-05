// Global imports
import * as webpack from 'webpack';
import * as DevServer from 'webpack-dev-server';

// Utils, helpers, etc. imports

// Constants
import {
  developEnv,
  devServerConfig,
} from './config/webpack';


// Main code
const compiler = webpack(developEnv);
const devServer = new DevServer(compiler, devServerConfig);
devServer.listen(3000, 'localhost');
