// Global imports
import * as cssModules from 'react-css-modules';

// Utils, helpers, etc. imports

// Constants
const CSS_MODULES_OPTIONS = {
  allowMultiple: true,
  handleNotFoundStyleName: 'log',
};


// Run code
export default function (styles: any) {
  return function (component) {
    return cssModules(styles, CSS_MODULES_OPTIONS)(component);
  };
}


// Modules, interfaces, types declarations
