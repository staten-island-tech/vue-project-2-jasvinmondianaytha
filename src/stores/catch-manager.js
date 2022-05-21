import { defineStore } from "pinia";
import { useGenerateStore } from "./generate-mon";
import { useFirebaseStore } from "./firebase-store";
import { balls } from "@/assets/json/balls.json";

export const useCatchStore = defineStore({
  id: "catcher",
  state: () => ({
    selectedBall: 1,
    status: null,
  }),
  actions: {
    catchCheck() {
      // if (this.selectedBall === 5) return true;
      // const ballProb = balls.find((obj) => {
      //   return obj.id === this.selectedBall;
      // }).prob;
      // const R1 = Math.floor(Math.random() * (ballProb + 1));
      // const S = !this.status ? 0 : this.status === "major" ? 25 : 12;
      // const R2 = S - R1;
      // if (R2 < 0) return true;

      // implement algorithm
      return true;
    },
    catchHandler() {
      if (this.catchCheck()) {
        useGenerateStore().finishMon();
        useFirebaseStore().saveData();
      }
    },
    applyStatus(st) {
      this.status = st;
    },
  },
});
