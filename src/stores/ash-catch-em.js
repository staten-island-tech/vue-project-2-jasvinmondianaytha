import { defineStore } from "pinia";
import { useTamagotchiListStore } from "./tamagotchi-list";
const listStore = useTamagotchiListStore();

export const useCatchEm = defineStore({
  id: "catch",
  state: () => ({
    pokemon: {
      name: "",
      species: "",
      nature: "",
      id: null,
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
        spatk: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        spdef: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
        speed: {
          ev: 0,
          iv: Math.floor(Math.random() * 31),
          base: 0,
        },
      },
      attributes: {
        fullness: {
          max: Math.floor(Math.random() * 5) + 10,
          current: null,
        },
        dirtiness: {
          max: Math.floor(Math.random() * 5) + 10,
          current: null,
        },
        love: {
          max: Math.floor(Math.random() * 5) + 10,
          current: null,
        },
        fatigue: {
          max: Math.floor(Math.random() * 5) + 10,
          current: null,
        },
      },
    },
  }),
  getters: {},
  actions: {
    catch() {
      if (Math.random() * 100 < 50) {
        console.log(this.pokemon);
        this.addToParty();
      } else {
        console.log("You didn't catch it");
      }
    },
    setMon(mon) {
      this.pokemon.species = mon.name.english;
      this.pokemon.stats.hp.base = mon.base["HP"];
      this.pokemon.stats.atk.base = mon.base["Attack"];
      this.pokemon.stats.def.base = mon.base["Defense"];
      this.pokemon.stats.spatk.base = mon.base["Sp. Attack"];
      this.pokemon.stats.spdef.base = mon.base["Sp. Defense"];
      this.pokemon.stats.speed.base = mon.base["Speed"];
    },
    addToParty() {
      listStore.pushToParty(this.pokemon);
    },
  },
});
