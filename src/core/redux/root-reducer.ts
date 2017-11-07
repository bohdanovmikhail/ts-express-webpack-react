// Global imports
import { combineReducers } from 'redux';

// Utils, helpers, etc. imports

// Constants


// Run code
export default combineReducers<RootState>({
  void: () => null,
});


// Modules, interfaces, types declarations
export interface RootState {
  void: null;
}
