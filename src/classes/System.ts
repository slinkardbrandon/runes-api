import { ISystem } from '../interfaces/ISystem';
import { IRune } from '../interfaces/IRune';
import { getNumberBetween } from '../functions/getNumberBetween';

export abstract class System {
  private name: ISystem['name'];
  public runes: ISystem['runes'];
  private startingCentury: ISystem['startingCentury'];
  private endingCentury: ISystem['endingCentury'];

  constructor({ name, runes, startingCentury, endingCentury }: ISystem) {
    this.name = name;
    this.runes = runes;
    this.startingCentury = startingCentury;
    this.endingCentury = endingCentury;
  }

  protected getRandomRune(selectFrom: IRune[] = this.runes): IRune {
    /**
     * Get a number between 1 & the total length, since we always subtract 1
     * after we get the random numeric value
     */
    const randomNumber = getNumberBetween(1, selectFrom.length);
    return selectFrom[randomNumber - 1];
  }

  protected getRandomRunes(
    selectFrom: IRune[] = this.runes,
    count: number = 3,
  ): IRune[] {
    if (count <= 0) {
      throw new Error('Cannot randomize zero or less runes');
    }
    if (count - 1 > selectFrom.length) {
      throw new Error('Cannot select more runes than are available.');
    }

    /**
     * If we reach this point it is safe to assume that the desired
     * count of runes is at least 1 and the runes list we can pick from
     * meets the requirements necessary to be able to access the arrays
     */

    // Clone the selection list so that we can freely mutate the input we receive
    // without trigger any side effects anywhere else in the code base.
    let mutableRuneSelectionList: Array<IRune> = JSON.parse(
      JSON.stringify(selectFrom),
    );
    const selectedRunes: Array<IRune> = [];

    for (let i = 0; i <= count; i++) {
      const rune = this.getRandomRune(mutableRuneSelectionList);
      // Remove the randomly chosen rune from the list of selections
      mutableRuneSelectionList = mutableRuneSelectionList.filter((r: IRune) => {
        return r.name !== rune.name;
      });

      selectedRunes.push(rune);
    }

    return selectedRunes;
  }

  /**
   * The methods of pulling runes may differ from system to system
   * so we're leaving it up to the individual classes of runes to implement
   * their own pulling functionality. Random selection of runes logic will be
   * implemented at the base level of course, but various pull styles
   * may be implemented depending on the class of rune system and what we know about them.
   */
  abstract pull: (...args: any[]) => IRune[];
}
