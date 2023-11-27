import { shuffle, splitEquallyIntoTwoArrays } from "../utils/utils";

export {};

declare global {
  interface Array<T> {
    shuffle(): T[];
    splitEquallyIntoTwoArrays(): T[][];
  }
}

if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function <T>(this: Array<T>): Array<T> {
    return shuffle(this);
  };
}

if (!Array.prototype.splitEquallyIntoTwoArrays) {
  Array.prototype.splitEquallyIntoTwoArrays = function <T>(
    this: Array<T>
  ): T[][] {
    return splitEquallyIntoTwoArrays(this);
  };
}
