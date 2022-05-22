import { defineStore } from "pinia";
import { useGenerateStore } from "./generate-mon";
import { useFirebaseStore } from "./firebase-store";
import { balls } from "@/assets/json/balls.json";

export const useCatchStore = defineStore({
  id: "catcher",
  state: () => ({
    selectedBall: 1,
    status: null,
    catchRate: 0,
    angerCount: 0,
    eatCount: 0,
  }),
  actions: {
    throwRock() {
      if (this.catchRate * 2 > 255) {
        this.catchRate = 255;
      } else {
        this.catchRate = Math.floor(this.catchRate * 2);
      }
      const addAnger = Math.floor(Math.random() * 5 + 1);
      if (this.angerCount + addAnger > 255) {
        this.angerCount = 255;
      } else {
        this.angerCount += addAnger;
      }
    },
    throwBait() {
      this.catchRate = Math.floor(this.catchRate / 2);
      const addEat = Math.floor(Math.random() * 5 + 1);
      if (this.eatCount + addEat > 255) {
        this.eatCount = 255;
      } else {
        this.eatCount += addEat;
      }
    },
    catchCheck() {
      if (this.selectedBall === 5) return true;
      const ballProb = balls.find((obj) => {
        return obj.id === this.selectedBall;
      }).prob;
      const R1 = Math.floor(Math.random() * (ballProb + 1));
      const S = !this.status ? 0 : this.status === "major" ? 25 : 12;
      const Rs = R1 - S;
      if (Rs < 0) return true;
      const F = 127; // skip hp factor
      if (this.catchRate < Rs) return false;
      const R2 = Math.floor(Math.random() * 256);
      if (R2 <= F) return true;

      return false;
    },
    catchHandler() {
      console.log(this.catchRate);
      if (this.catchCheck()) {
        useGenerateStore().finishMon();
        useFirebaseStore().saveData();
      } else {
        console.log("FAILLED");
      }
    },
    applyStatus(st) {
      this.status = st;
    },
  },
});
