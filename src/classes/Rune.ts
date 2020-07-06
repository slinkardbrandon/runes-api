import { IRune } from '../interfaces/IRune';

export class Rune {
  public readonly name: IRune['name'];
  public readonly aett: IRune['aett'];
  public readonly imageUrl: IRune['imageUrl'];
  public readonly transliteration: IRune['transliteration'];
  public readonly meaning: IRune['meaning'];
  public face: 'up' | 'down';

  constructor(params: IRune) {
    this.name = params.name;
    this.aett = params.aett;
    this.imageUrl = params.imageUrl;
    this.transliteration = params.transliteration;
    this.meaning = params.meaning;
    this.face = 'up';
  }

  /**
   * "Toss" the rune, like one tosses a coin to their witcher
   * in the valley of plenty. This should give us a 50/50 chance
   * of getting "heads" or "tails" in a sense.
   */
  public toss(): void {
    const face = Math.random() >= 0.5 ? 'up' : 'down';
    this.face = face;
  }
}
