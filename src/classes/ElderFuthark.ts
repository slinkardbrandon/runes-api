import { System } from './System';
import { IRune } from '../interfaces/IRune';
import { Rune } from './Rune';
import { Aett } from '../enums/Aett';

export class ElderFuthark extends System {
  constructor() {
    super({
      name: 'Elder Futhark',
      startingCentury: 2,
      endingCentury: 8,
      runes: [
        new Rune({
          name: 'fehu',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/0/07/Runic_letter_fehu.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'F',
        }),
        new Rune({
          name: 'uruz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/8/8e/Runic_letter_uruz.pngg',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'U',
        }),
        new Rune({
          name: 'thurisaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/e/ee/Runic_letter_thurisaz.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'Th',
        }),

        new Rune({
          name: 'ansuz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/3/35/Runic_letter_ansuz.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'A',
        }),
        new Rune({
          name: 'raido',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/cf/Runic_letter_raido.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'R',
        }),
        new Rune({
          name: 'kenaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_kauna.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: ['K', 'C'],
        }),
        new Rune({
          name: 'gebo',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/2/23/Runic_letter_gebo.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'G',
        }),
        new Rune({
          name: 'wunjo',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/3/3f/Runic_letter_wunjo.png',
          aett: Aett.Freya,
          meaning: '',
          transliteration: 'W',
        }),
        /**
         * Start the second aett, the aett of Heimdall
         */
        new Rune({
          name: 'hagalaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/2/25/Runic_letter_haglaz.png',
          aett: Aett.Heimdall,
          meaning: '',
          transliteration: 'H',
        }),
        new Rune({
          name: 'naudiz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/b/b9/Runic_letter_naudiz.png',
          aett: Aett.Heimdall,
          meaning: '',
          transliteration: 'N',
        }),
        new Rune({
          name: 'isa',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/b/bc/Runic_letter_isaz.png',
          aett: Aett.Heimdall,
          meaning: '',
          transliteration: 'I',
        }),
        new Rune({
          name: 'jera',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/0/01/Runic_letter_jeran.png',
          aett: Aett.Heimdall,
          meaning: '',
          transliteration: 'J',
        }),
        new Rune({
          name: 'Eihwaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/3/3e/Runic_letter_iwaz.png',
          aett: Aett.Heimdall,
          meaning: '',
          transliteration: 'J',
        }),
        new Rune({
          name: 'perthro',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/b/bf/Runic_letter_pertho.png',
          aett: Aett.Heimdall,
          meaning: '',
          transliteration: 'P',
        }),
        new Rune({
          name: 'algiz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/1/14/Runic_letter_algiz.png',
          aett: Aett.Heimdall,
          meaning: 'elk',
          transliteration: 'Z',
        }),
        new Rune({
          name: 'sowilo',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/c8/Runic_letter_sowilo.png',
          aett: Aett.Heimdall,
          meaning: 'sun',
          transliteration: 'S',
        }),
        /**
         * Start the third Aett, the aett of Tiwaz
         */
        new Rune({
          name: 'tiwaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/a/a3/Runic_letter_tiwaz.png',
          aett: Aett.Tiwaz,
          meaning: 'the god Tiwaz',
          transliteration: 'T',
        }),
        new Rune({
          name: 'berkano',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/ca/Runic_letter_berkanan.png',
          aett: Aett.Tiwaz,
          meaning: 'birch',
          transliteration: 'B',
        }),
        new Rune({
          name: 'ehwaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/2/2e/Runic_letter_ehwaz.png',
          aett: Aett.Tiwaz,
          meaning: 'horse',
          transliteration: 'E',
        }),
        new Rune({
          name: 'mannaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/0/0c/Runic_letter_mannaz.png',
          aett: Aett.Tiwaz,
          meaning: 'man',
          transliteration: 'M',
        }),
        new Rune({
          name: 'laguz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/a/a9/Runic_letter_laukaz.png',
          aett: Aett.Tiwaz,
          meaning: 'water, sea',
          transliteration: 'L',
        }),
        new Rune({
          name: 'ingwaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Runic_letter_ingwaz.png',
          aett: Aett.Tiwaz,
          meaning: '',
          transliteration: 'N',
        }),
        new Rune({
          name: 'dagaz',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/c6/Runic_letter_dagaz.png',
          aett: Aett.Tiwaz,
          meaning: '',
          transliteration: 'D',
        }),
        new Rune({
          name: 'othala',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/1/16/Runic_letter_othalan.png',
          aett: Aett.Tiwaz,
          meaning: 'home',
          transliteration: 'O',
        }),
      ],
    });
  }

  public pull = (): IRune[] => {
    // TODO: Implement it
    return [{}] as IRune[];
  };
}
