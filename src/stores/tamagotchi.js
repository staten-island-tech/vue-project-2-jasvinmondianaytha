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
    happinessBar() {
      return this.happiness.toString() + "%";
    },
    energyBar() {
      return this.energy.toString() + "%";
    },
  },
  actions: {
    hungry: function () {
      if (this.hunger <= 0) return;
      this.hunger = this.hunger - 1;
    },
    full: function () {
      this.hunger = this.hunger + 1;
    },
    unhappy: function () {
      if (this.happiness <= 0) return;
      this.happiness = this.happiness - 2;
    },
    happy: function () {
      this.happiness = this.happiness + 2;
    },
    tired: function () {
      if (this.energy <= 0) return;
      this.energy = this.energy - 3;
    },
    ecstatic: function () {
      this.energy = this.energy + 3;
    },
  },
});
