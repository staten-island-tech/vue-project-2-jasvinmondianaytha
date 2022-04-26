import { defineStore } from "pinia";

export const useTamagotchiListStore = defineStore({
  id: "tamagotchi",
  state: () => ({
    name: "",
  }),
});
