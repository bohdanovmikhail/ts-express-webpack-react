// Global imports

// Utils, helpers, etc. imports
import { Elevator } from './elevator.class';

// Constants


// Run code
export class Controller {
  constructor(config: ControllerConfig) {
  }

  /**
   * Passenger called elevator to floor
   * @param params
   */
  public callToFloor(floor: number): void {

  }
}

const elevator1 = new Elevator();
const elevator2 = new Elevator();

const controller = new Controller({
  floors: 10,
  elevators: [elevator1, elevator2],
});

controller.callToFloor(1);

// Modules, interfaces, types declarations
interface ControllerConfig {
  floors: number;
  elevators: Elevator[];
}
