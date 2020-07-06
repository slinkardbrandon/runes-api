import { Aett } from '../../enums/Aett';
import { Rune } from '../../classes/Rune';

export const hagalaz = new Rune({
  name: 'hagalaz',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Runic_letter_haglaz.png',
  aett: Aett.Heimdall,
  meaning: 'hail, the ice seed',
  transliteration: 'H',
});
