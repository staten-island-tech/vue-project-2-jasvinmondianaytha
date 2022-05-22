import { defineStore } from "pinia";
import { useBoxStore } from "./box-store";

export const useMonStore = defineStore({
  id: "mon",
  state: () => ({
    pokemon: null,
  }),
  actions: {
    setMon(uuid) {
      this.pokemon = useBoxStore().box.find((ele) => ele.id == uuid);
    },
    clearMon() {
      this.pokemon = null;
    },
  },
});
