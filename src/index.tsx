// Global imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux imports

// Utils, helpers, etc. imports

// Util components imports

// Main components imports
import { MainPage } from 'components/main-page';

// Styles, languages, etc. imports

// Constants
const ROOT_ELEMENT = document.getElementById('root');


// Run code
ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
  ROOT_ELEMENT,
);


// Modules, interfaces, types declarations
