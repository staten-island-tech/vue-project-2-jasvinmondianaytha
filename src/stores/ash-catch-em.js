import { defineStore } from "pinia";
import { useTamagotchiListStore } from "./tamagotchi-list";
import { catchRates } from "../assets/catch-rates.json";
import { balls } from "../assets/balls.json";
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
        hunger: {
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
    },
    pokeball: "",
  }),
  getters: {},
  actions: {
    catch() {
      if (!this.pokeball) return;
      if (this.pokeball === "Master Ball") {
        this.addToParty();
      } else {
        const r1 = this.genR1(this.pokeball);
        if (this.getCatchRate() < r1) {
          console.log("fyu");
        }
      }
    },
    getCatchRate() {
      return catchRates.find((obj) => {
        return obj.id == this.pokemon.id;
      }).rate;
    },
    genR1(ball) {
      return Math.floor(
        Math.random() *
          balls.find((obj) => {
            return obj.name === ball;
          }).prob
      );
    },
    setBall(ball) {
      this.pokeball = ball;
    },
    setMon(mon) {
      this.$reset();
      this.pokemon.species = mon.name.english;
      this.pokemon.id = mon.id;
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
        hunger: Math.floor(Math.random() * 5) + 10,
        hygiene: Math.floor(Math.random() * 5) + 10,
        love: Math.floor(Math.random() * 5) + 10,
        energy: Math.floor(Math.random() * 5) + 10,
      };
      this.pokemon.attributes.hunger.max = attr.hunger;
      this.pokemon.attributes.hunger.current = attr.hunger;
      this.pokemon.attributes.hygiene.max = attr.hygiene;
      this.pokemon.attributes.hygiene.current = attr.hygiene;
      this.pokemon.attributes.love.max = attr.love;
      this.pokemon.attributes.love.current = attr.love;
      this.pokemon.attributes.fun.max = attr.fun;
      this.pokemon.attributes.fun.current = attr.fun;
      this.pokemon.attributes.energy.max = attr.energy;
      this.pokemon.attributes.energy.current = 0;
    },
    addToParty() {
      listStore.pushToParty(this.pokemon);
    },
  },
});
