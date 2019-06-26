// Global imports

// Utils, helpers, etc. imports
import { Controller } from './controller.class';

// Constants

enum Direction {
  Up,
  Down,
}

enum Status {
  // Waiting for action
  // Opening the doors
  // Waiting for closing doors
  // Closing the doors
  // Start moving
  // Moving
  // Stop moving
  Waiting,
  Opening,
  Closing,
  Accelerating,
  Moving,
  Stoping,
}


// Run code
export class Elevator {
  private _currentStatus: Status = null;
  private _currentDirection: Direction = null;
  private _currentSpeed: number = 0;

  constructor() {}

  /**
   * Passenger pressed Open Doors button
   */
  public openDoors(): void {
  }

  /**
   * Passenger pressed Close Doors button
   */
  public closeDoors(): void {
  }

  /**
   * Passenger pressed button for specific floor
   */
  public selectFloor(): void {
  }
}


// Modules, interfaces, types declarations
export interface ElevatorConfig {
}
