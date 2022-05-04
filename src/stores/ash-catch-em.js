import { defineStore } from "pinia";
import { useTamagotchiListStore } from "./tamagotchi-list";
const listStore = useTamagotchiListStore();

export const useCatchEm = defineStore({
  id: "catch",
  state: () => ({
    pokemon: null,
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
      this.pokemon = mon;
    },
    addToParty() {
      listStore.pushToParty(this.pokemon);
    },
  },
});
