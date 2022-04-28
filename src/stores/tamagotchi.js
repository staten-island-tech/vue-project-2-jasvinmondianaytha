import { defineStore } from "pinia";

export const useTamagotchiStore = defineStore({
  id: "tamagotchi",
  state: () => ({
    name: "",
    hunger: 100,
    happiness: 100,
    energy: 100,
  }),
  getters: {
    hungerBar() {
      return this.hunger.toString() + "%";
    },
  },
  actions: {
    hungry: function () {
      this.hunger = this.hunger - 1;
    },
    full: function () {
      this.hunger = this.hunger + 1;
    },
  },
});
