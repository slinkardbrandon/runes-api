import { IRune } from './IRune';

export interface ISystem {
  name: string;
  /**
   * 1 based index, 1st century will be 1, 2nd century will be 2.
   */
  startingCentury: number;
  /**
   * 1 based index, 1st century will be 1, 2nd century will be 2.
   */
  endingCentury: number;
  runes: IRune[];
}
