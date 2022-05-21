import { defineStore } from "pinia";
import { useBoxStore } from "./box-store";
import "node:crypto";
import * as dex from "@/assets/json/pokedex.json";
import * as natures from "@/assets/json/natures.json";

export const useGenerateStore = defineStore({
  id: "generate",
  state: () => ({
    pokemon: {
      name: "",
      species: "",
      nature: "",
      gender: "",
      ability: "",
      id: null,
      num: null,
      type: [],
      stats: {
        hp: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        atk: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        def: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        spa: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        spd: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        spe: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
      },
      attributes: {
        fullness: {
          max: null,
          current: null,
        },
        hygiene: {
          max: null,
          current: null,
        },
        love: {
          max: null,
          current: null,
        },
        fun: {
          max: null,
          current: null,
        },
        energy: {
          max: null,
          current: null,
        },
      },
      sprite: "",
    },
    pokeball: "",
  }),
  actions: {
    setMon() {
      const id = (Object.keys(dex).length * Math.random()) << 0;
      const rMon = dex[Object.keys(dex)[id]];
      if (rMon.num < 1 || rMon.num > 151 || rMon.baseSpecies) {
        this.setMon();
      } else {
        this.pokemon.species = rMon.name;
        const sprite = Object.keys(dex)[id];
        this.pokemon.sprite = `https://play.pokemonshowdown.com/sprites/gen1/${sprite}.png`;
        for (const stat in this.pokemon.stats) {
          this.pokemon.stats[stat].base = rMon.baseStats[stat];
        }
      }
    },
    finishMon() {
      const rMon = Object.values(dex).find((ele) => ele.name === this.pokemon.species);
      this.pokemon.num = rMon.num;
      this.pokemon.type = rMon.types;

      this.pokemon.gender = setGender(rMon);
      this.pokemon.nature =
        natures.default[Math.floor(Math.random() * natures.default.length)]["Nature"];
      this.pokemon.id = crypto.randomUUID();
      this.pokemon.ability =
        rMon.abilities[
          Object.keys(rMon.abilities)[(Object.keys(rMon.abilities).length * Math.random()) << 0]
        ];

      const attr = {
        fullness: Math.floor(Math.random() * 6) + 10,
        hygiene: Math.floor(Math.random() * 6) + 10,
        love: Math.floor(Math.random() * 6) + 10,
        fun: Math.floor(Math.random() * 6) + 10,
        energy: Math.floor(Math.random() * 6) + 10,
      };

      for (const attri in this.pokemon.attributes) {
        const val = attr[attri];
        this.pokemon.attributes[attri].max = val;
        this.pokemon.attributes[attri].current = val;
      }

      useBoxStore().box.push(this.pokemon);
      console.log(useBoxStore().box);

      this.$reset();
      this.setMon();
    },
  },
});

function setGender(mon) {
  if (mon.genderRatio) {
    return Math.random() < mon.genderRatio["M"] ? "M" : "F";
  } else if (mon.gender) {
    return mon.gender;
  } else {
    return Math.round(Math.random()) === 0 ? "M" : "F";
  }
}