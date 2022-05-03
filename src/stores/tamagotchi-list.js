import { defineStore } from "pinia";

export const useTamagotchiListStore = defineStore({
  id: "tamagotchiList",
  state: () => ({
    pets: [Bulbasaur],
  }),
});
