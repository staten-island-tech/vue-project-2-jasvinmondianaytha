import { defineStore } from "pinia";

export const useTamagotchiStore = defineStore({
  id: "tamagotchi",
  state: () => ({
    name: "",
    species: "",
    nature: "",
    id: null,
    type: [],
    stats: {
      hp: {
        ev: 0,
        iv: 0,
        base: 0,
      },
      atk: {
        ev: 0,
        iv: 0,
        base: 0,
      },
      def: {
        ev: 0,
        iv: 0,
        base: 0,
      },
      spatk: {
        ev: 0,
        iv: 0,
        base: 0,
      },
      spdef: {
        ev: 0,
        iv: 0,
        base: 0,
      },
      speed: {
        ev: 0,
        iv: 0,
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
  }),
  getters: {},
  actions: {},
});
