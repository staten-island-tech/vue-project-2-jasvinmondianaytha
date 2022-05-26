import { defineStore } from "pinia";
import { useGenerateStore } from "./generate-mon";
import { useFirebaseStore } from "./firebase-store";
import { useMessageStore } from "./message-log";
import { balls } from "@/assets/json/balls.json";

export const useCatchStore = defineStore({
  id: "catcher",
  state: () => ({
    selectedBall: 4,
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
      this.eatCount = 0;
      useMessageStore().pushMessage("You threw a ROCK!");
      this.monTurn();
    },
    throwBait() {
      this.catchRate = Math.floor(this.catchRate / 2);
      const addEat = Math.floor(Math.random() * 5 + 1);
      if (this.eatCount + addEat > 255) {
        this.eatCount = 255;
      } else {
        this.eatCount += addEat;
      }
      this.angerCount = 0;
      useMessageStore().pushMessage("You threw BAIT!");
      this.monTurn();
    },
    runAway() {
      useMessageStore().pushMessage("You ran away!");
      useGenerateStore().reset();
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
      useMessageStore().pushMessage("You threw a BALL!");
      if (this.catchCheck()) {
        useMessageStore().pushMessage("You caught the pokemon!");
        useGenerateStore().finishMon();
        useFirebaseStore().saveData();
      } else {
        this.monTurn();
      }
    },
    monTurn() {
      let X = (useGenerateStore().pokemon.stats.spe.actual % 256) * 2;
      if (X > 255) {
        useMessageStore().pushMessage("The pokemon ran away!");
        useGenerateStore().reset();
      }
      if (this.angerCount > 0) {
        if (X * 2 > 255) {
          X = 255;
        } else {
          X = X * 2;
        }
      } else if (this.eatCount > 0) {
        X = X / 4;
      }
      const R = Math.floor(Math.random() * 256);
      if (R < X) {
        useMessageStore().pushMessage("The pokemon ran away!");
        useGenerateStore().reset();
      }

      if (this.angerCount > 0) {
        if (this.angerCount - 1 <= 0) {
          this.angerCount = 0;
          useGenerateStore().setCatchRate();
        } else {
          this.angerCount -= 1;
        }
      }
      if (this.eatCount > 0) {
        this.eatCount -= 1;
      }
    },
    applyStatus(st) {
      this.status = st;
    },
  },
});
