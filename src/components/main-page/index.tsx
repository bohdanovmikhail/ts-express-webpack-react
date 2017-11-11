// Global imports
import * as React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// Redux imports

// Utils, helpers, etc. imports
import cssModule from 'utils/css-module';

// Util components imports

// Main components imports

// Styles, languages, etc. imports
import * as styles from './index.scss';

// Constants


// Run code
@cssModule(styles)
export class MainPage extends React.Component {
  render() {
    return (
      <div styleName="test-class-name">
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
                )}/>
              </Switch>
            </div>
          )}/>
          <Route path="/page-2" render={() => (
            <div>
              Page 2
            </div>
          )}/>
        </Switch>
      </div>
    );
  }
}


// Modules, interfaces, types declarations
