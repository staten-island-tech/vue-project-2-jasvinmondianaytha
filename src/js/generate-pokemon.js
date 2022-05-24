import * as dex from "@/assets/json/pokedex.json";
import { catchRates } from "@/assets/json/catch-rates.json";
import "node:crypto";

export class Pokemon {
  constructor(num) {
    const baseMon = Object.values(dex).find((obj) => {
      return obj.num == num;
    });
    const monKey = Object.keys(dex).find((key) => dex[key].num === num);
    this.name = baseMon.name;
    this.num = num;
    this.catchRate = catchRates[num - 1].rate;
    this.sprite = `https://play.pokemonshowdown.com/sprites/gen1/${monKey}.png`;
    this.type = baseMon.types;
    this.gender = this.#calcGender(baseMon);
    this.id = crypto.randomUUID();
    this.speed = this.#returnStat(baseMon.baseStats.spe, Math.floor(Math.random() * 15), 30);
    this.#setAttributes();
  }
  #returnStat(base, dv, lvl) {
    return Math.floor(((base + dv) * 2 * lvl) / 100 + 5);
  }
  #setAttributes() {
    const attr = {
      fullness: Math.floor(Math.random() * 6) + 10,
      hygiene: Math.floor(Math.random() * 6) + 10,
      love: Math.floor(Math.random() * 6) + 10,
      fun: Math.floor(Math.random() * 6) + 10,
      energy: Math.floor(Math.random() * 6) + 10,
    };

    this.attributes = {
      fullness: {
        max: attr.fullness,
        current: attr.fullness,
      },
      hygiene: {
        max: attr.hygiene,
        current: attr.hygiene,
      },
      love: {
        max: attr.love,
        current: attr.love,
      },
      fun: {
        max: attr.fun,
        current: attr.fun,
      },
      energy: {
        max: attr.fun,
        current: attr.fun,
      },
    };
  }
  #calcGender(mon) {
    if (mon.genderRatio) {
      return Math.random() < mon.genderRatio["M"] ? "M" : "F";
    } else if (mon.gender) {
      return mon.gender;
    } else {
      return Math.round(Math.random()) === 0 ? "M" : "F";
    }
  }
}
