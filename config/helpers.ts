// Global imports
import * as path from 'path';

// Constants
const ROOT = path.resolve(__dirname, '../');


// Main code
export function rootDir(...paths: string[]): string {
  return path.join(ROOT, ...paths);
}

export function srcDir(...paths: string[]): string {
  return path.join(ROOT, 'src', ...paths);
}
