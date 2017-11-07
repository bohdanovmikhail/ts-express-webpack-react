// Global imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

// Redux imports
import { rootReducer } from 'core/redux';

// Utils, helpers, etc. imports
import { configureStore } from 'core/utils/redux';

// Util components imports

// Main components imports

// Styles, languages, etc. imports

// Constants


// Run code
export function buildRoot(
  children: JSX.Element,
  element: Element | null,
) {
  const store = configureStore(rootReducer);

  ReactDOM.render(
    (
     <ReduxProvider store={store}>
       <BrowserRouter>
        {children}
      </BrowserRouter>
     </ReduxProvider>
    ),
    element,
  );
}


// Modules, interfaces, types declarations
