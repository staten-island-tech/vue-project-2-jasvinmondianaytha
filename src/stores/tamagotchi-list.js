import { defineStore } from "pinia";

export const useTamagotchiListStore = defineStore({
  id: "tamagotchiList",
  state: () => ({
    pets: [],
  }),
  actions: {
    pushToParty(mon) {
      this.pets.push(mon);
    },
  },
});
