// Global imports
import {
  applyMiddleware,
  createStore,
  compose,
  Middleware,
  Store,
  Reducer,
} from 'redux';
import { createLogger } from 'redux-logger';

// Redux imports
import { RootState } from 'core/redux';

// Utils, helpers, etc. imports

// Constants


// Run code
export function configureStore(
  rootReducer: Reducer<RootState>,
): Store<RootState>;

export function configureStore(
  rootReducer: Reducer<RootState>,
  initialState = {} as RootState,
): Store<RootState> {
  const middlewares: Middleware[] = [];

  if (GLOBAL_DEBUG) {
    middlewares.push(createLogger({
      level: 'info',
      duration: true,
      collapsed: true,
      diff: true,
    }));
  }

  let middleware: any = applyMiddleware(...middlewares);

  if (GLOBAL_DEBUG) {
    if (window.devToolsExtension) {
      middleware = compose(middleware, window.devToolsExtension());
    }
  }

  const store = middleware(createStore)(rootReducer, initialState);

  // if (module.hot) {
  //   module.hot.accept('', () => {
  //     const newRootReducer = require('').default;
  //     store.replaceReducer(newRootReducer);
  //   });
  // }

  return {
    ...store,
  };
}


// Modules, interfaces, types declarations
declare let GLOBAL_DEBUG: boolean;
declare let window: Window;
declare interface Window {
  devToolsExtension(): (args?: any) => any;
}
