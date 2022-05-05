import { defineStore } from "pinia";
import { useTamagotchiListStore } from "./tamagotchi-list";
import { catchRates } from "../assets/catch-rates.json";
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
          max: null,
          current: null,
        },
        dirtiness: {
          max: null,
          current: null,
        },
        love: {
          max: null,
          current: null,
        },
        fatigue: {
          max: null,
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
      } else if (Math.random() * 100 < 40) {
        console.log("You didn't catch it");
      } else {
        console.log("It ran away lol");
      }
    },
    pokeball(id) {
      const poke = catchRates.find((ele) => ele.id == id);
      const rate = (poke.rate * 100) / 255;
      console.log(rate);
    },
    greatball() {},
    setMon(mon) {
      this.$reset();
      this.pokemon.species = mon.name.english;
      this.pokemon.stats.hp.base = mon.base["HP"];
      this.pokemon.stats.atk.base = mon.base["Attack"];
      this.pokemon.stats.def.base = mon.base["Defense"];
      this.pokemon.stats.spatk.base = mon.base["Sp. Attack"];
      this.pokemon.stats.spdef.base = mon.base["Sp. Defense"];
      this.pokemon.stats.speed.base = mon.base["Speed"];
      this.genMon();
    },
    genMon() {
      const attr = {
        fullness: Math.floor(Math.random() * 5) + 10,
        dirtiness: Math.floor(Math.random() * 5) + 10,
        love: Math.floor(Math.random() * 5) + 10,
        fatigue: Math.floor(Math.random() * 5) + 10,
      };
      this.pokemon.attributes.fullness.max = attr.fullness;
      this.pokemon.attributes.fullness.current = attr.fullness;
      this.pokemon.attributes.dirtiness.max = attr.dirtiness;
      this.pokemon.attributes.dirtiness.current = attr.dirtiness;
      this.pokemon.attributes.love.max = attr.love;
      this.pokemon.attributes.love.current = attr.love;
      this.pokemon.attributes.fatigue.max = attr.fatigue;
      this.pokemon.attributes.fatigue.current = 0;
    },
    addToParty() {
      listStore.pushToParty(this.pokemon);
    },
  },
});
