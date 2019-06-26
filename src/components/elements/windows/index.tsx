// Global imports
import * as React from 'react';

// Redux imports

// Utils, helpers, etc. imports
import cssModule from 'utils/css-module';

// Util components imports

// Main components imports
import { Window } from './_components/window';

// Styles, languages, etc. imports
import * as styles from './index.scss';

// Constants


// Run code
@cssModule(styles)
export class Windows extends React.Component<PropTypes> {
  public static defaultProps: PropTypes = {
    count: 1,
  };

  public render(): JSX.Element {
    const { count, className } = this.props;

    if (!count) {
      return null;
    }

    return (
      <div
        className={className}
        styleName="windows"
      >
        {this._getWindows()}
      </div>
    );
  }

  private _getWindows(): JSX.Element[] {
    return Array(this.props.count)
      .fill(<Window />);
  }
}


// Modules, interfaces, types declarations
interface PropTypes {
  className?: string;
  count?: number;
}
