import { Aett } from '../../enums/Aett';
import { Rune } from '../../classes/Rune';

export const thurisaz = new Rune({
  name: 'thurisaz',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/e/ee/Runic_letter_thurisaz.png',
  aett: Aett.Freya,
  meaning: 'hammer of Thor',
  transliteration: 'Th',
});
