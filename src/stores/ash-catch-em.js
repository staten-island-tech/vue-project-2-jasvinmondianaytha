import { defineStore } from "pinia";

export const useCatchEm = defineStore({
  id: "catch",
  state: () => ({
    pokemon: null,
  }),
  getters: {
    getRandomId() {
      return Math.ceil(Math.random() * 898);
    },
  },
  actions: {
    catch() {
      if (Math.random() * 100 < 50) {
        console.log("You caught it");
      } else if (Math.random() * 100 >= 50) {
        console.log("You didn't catch it");
      }
    },
  },
});
