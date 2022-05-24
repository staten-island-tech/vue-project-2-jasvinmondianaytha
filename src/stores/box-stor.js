import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase-store";

export const useBoxStore = defineStore({
  id: "box",
  state: () => ({
    box: [],
    selectedMon: null,
  }),
  actions: {
    setMon(id) {
      this.selectedMon = id;
    },
    clearMon() {
      this.selectedMon = null;
    },
    async applyDecs() {
      const decRate = 0.5;
      useFirebaseStore().returnInitTime.then((data) => {
        console.log(data);
      });
    },
  },
});
