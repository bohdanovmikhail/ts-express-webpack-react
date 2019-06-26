// Global imports
import * as React from 'react';

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
export class Window extends React.Component<PropTypes> {
  public static defaultProps: PropTypes = {
    color: null,
  };

  public render(): JSX.Element {
    return (
      <div styleName="window">
        <div styleName="part" />
        <div styleName="part" />
        <div styleName="part" />
        <div styleName="part" />
      </div>
    );
  }
}


// Modules, interfaces, types declarations
interface PropTypes {
  color?: string;
}
