import { Aett } from '../enums/Aett';
import { Transliteration } from '../types/Transliteration';

export interface IRune {
  name: string;
  imageUrl: string;
  aett: Aett;
  transliteration: Transliteration;
  /**
   * Short meaning of a rune, not necessarily meanings within divination
   */
  meaning: string;
}
