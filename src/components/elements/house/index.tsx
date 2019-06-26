// Global imports
import * as React from 'react';

// Redux imports

// Utils, helpers, etc. imports
import cssModule from 'utils/css-module';

// Util components imports

// Main components imports
import { Elevator } from 'components/elements/elevator';
import { Windows } from 'components/elements/windows';

// Styles, languages, etc. imports
import * as styles from './index.scss';

// Constants


// Run code
@cssModule(styles)
export class House extends React.Component<PropTypes> {
  public static defaultProps: PropTypes = {
    hasRoof: true,
    floors: 2,
    elevatorCount: 1,
  };

  public render(): JSX.Element {
    const { floors } = this.props;

    return (
      <div styleName="house">
        {this._getRoof()}

        <div styleName="body">
          <div styleName="left-windows">
            <Windows count={floors} />
          </div>

          {this._getElevators()}

          <div styleName="right-windows">
            <Windows count={floors} />
          </div>

        </div>
      </div>
    );
  }

  private _getElevators(): JSX.Element {
    return (
      <div styleName="elevator">
        <Elevator />
      </div>
    );
  }

  private _getRoof(): JSX.Element {
    if (!this.props.hasRoof) {
      return null;
    }

    return (
      <div styleName="roof">
        Roof
      </div>
    );
  }
}


// Modules, interfaces, types declarations
interface PropTypes {
  hasRoof?: boolean;
  floors?: number;
  elevatorCount?: number;
}
