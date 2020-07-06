import { System } from './System';
import { berkano } from './runes/ElderFuthark/berkano';
import { ansuz } from './runes/ElderFuthark/ansuz';
import { thurisaz } from './runes/ElderFuthark/thurisaz';
import { uruz } from './runes/ElderFuthark/uruz';
import { fehu } from './runes/ElderFuthark/Fehu';
import { raidho } from './runes/ElderFuthark/raidho';
import { kenaz } from './runes/ElderFuthark/kenaz';
import { gebo } from './runes/ElderFuthark/gebo';
import { wunjo } from './runes/ElderFuthark/wunjo';
import { hagalaz } from './runes/ElderFuthark/hagalaz';
import { naudhiz } from './runes/ElderFuthark/naudhiz';
import { isa } from './runes/ElderFuthark/isa';
import { perthro } from './runes/ElderFuthark/perthro';
import { jera } from './runes/ElderFuthark/jera';
import { eihwaz } from './runes/ElderFuthark/eihwaz';
import { algiz } from './runes/ElderFuthark/algiz';
import { sowilo } from './runes/ElderFuthark/sowilo';
import { tiwaz } from './runes/ElderFuthark/tiwaz';
import { ehwaz } from './runes/ElderFuthark/ehwaz';
import { mannaz } from './runes/ElderFuthark/mannaz';
import { laguz } from './runes/ElderFuthark/laguz';
import { ingwaz } from './runes/ElderFuthark/ingwaz';
import { dagaz } from './runes/ElderFuthark/dagaz';
import { othala } from './runes/ElderFuthark/othala';
import { Rune } from './Rune';

export class ElderFuthark extends System {
  constructor() {
    super({
      name: 'Elder Futhark',
      startingCentury: 2,
      endingCentury: 8,
      runes: [
        /**
         * The first aett, the aett of Freya
         */
        fehu,
        uruz,
        thurisaz,
        ansuz,
        raidho,
        kenaz,
        gebo,
        wunjo,
        /**
         * Start the second aett, the aett of Heimdall
         */
        hagalaz,
        naudhiz,
        isa,
        jera,
        eihwaz,
        perthro,
        algiz,
        sowilo,
        /**
         * Start the third Aett, the aett of Tiwaz
         */
        tiwaz,
        berkano,
        ehwaz,
        mannaz,
        laguz,
        ingwaz,
        othala,
        dagaz,
      ],
    });
  }

  /**
   * Create more sophisticated pulls in the future
   */
  public pull = (count: number = 3): Rune[] => {
    const runes = this.getRandomRunes(this.runes, count);
    runes.forEach(r => r.toss());

    return runes;
  };
}
