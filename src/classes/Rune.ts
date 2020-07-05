import { IRune } from '../interfaces/IRune';

export class Rune {
  public readonly name: IRune['name'];
  public readonly aett: IRune['aett'];
  public readonly imageUrl: IRune['imageUrl'];
  public readonly transliteration: IRune['transliteration'];
  public readonly meaning: IRune['meaning'];

  constructor(params: IRune) {
    this.name = params.name;
    this.aett = params.aett;
    this.imageUrl = params.imageUrl;
    this.transliteration = params.transliteration;
    this.meaning = params.meaning;
  }
}
