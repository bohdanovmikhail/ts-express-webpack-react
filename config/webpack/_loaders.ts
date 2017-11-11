// Global imports
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

// Utils, helpers, etc. imports
import { srcDir } from '../helpers';

// Constants
import {
  runOptions,
  runtimeOptions,
} from '../settings';

const TS_LOADERS: any[] = [
  {
    loader: 'awesome-typescript-loader',
  },
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
  scss: {
    test: /\.scss$/,
    include: [
      srcDir(),
    ],
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: true,
            localIdentName: runOptions.env.isDevelop
              ? '[path]-[name]__[local]___[hash:base64:5]'
              : '[hash:base64:5]',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }),
  },
};


// Modules, interfaces, types declarations
