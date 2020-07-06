import { Aett } from '../../enums/Aett';
import { Rune } from '../../classes/Rune';

export const dagaz = new Rune({
  name: 'dagaz',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/c/c6/Runic_letter_dagaz.png',
  aett: Aett.Tiwaz,
  meaning: 'dawning of the day',
  transliteration: 'D',
});
