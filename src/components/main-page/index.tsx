// Global imports
import * as React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// Redux imports

// Utils, helpers, etc. imports

// Util components imports

// Main components imports

// Styles, languages, etc. imports

// Constants


// Run code
export class MainPage extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => (
          <div>
            Main page
          </div>
        )}/>
        <Route path="/page-1" render={() => (
          <div>
            Page 1

            <Switch>
              <Route path="/page-1/sub-page" exact render={() => (
                <div>
                  Sub page
                </div>
              )} />
            </Switch>
          </div>
        )} />
        <Route path="/page-2" render={() => (
          <div>
            Page 2
          </div>
        )} />
      </Switch>
    );
  }
}


// Modules, interfaces, types declarations
