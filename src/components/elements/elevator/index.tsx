// Global imports
import * as React from 'react';
import classNames from 'classnames';

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
export class Elevator extends React.Component<PropTypes> {
  static defaultProps: PropTypes = {
    opened: false,
  };

  render() {
    const { opened } = this.props;

    return (
      <div styleName={classNames('elevator', { opened })}>
        <div styleName="door left" />
        <div styleName="door right" />
      </div>
    );
  }
}


// Modules, interfaces, types declarations
interface PropTypes {
  opened?: boolean;
}
