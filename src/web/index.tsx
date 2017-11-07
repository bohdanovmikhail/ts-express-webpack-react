// Global imports
import * as React from 'react';

// Redux imports

// Utils, helpers, etc. imports
import { buildRoot } from 'web/utils/build-root';

// Util components imports

// Main components imports
import { Root } from 'web/pages/root';

// Styles, languages, etc. imports

// Constants
const ROOT_ELEMENT = document.getElementById('root');

// Run code
buildRoot(
  (
    <Root />
  ),
  ROOT_ELEMENT,
);


// Modules, interfaces, types declarations
