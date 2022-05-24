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
    feed(id) {
      this.box[id].attributes.fullness.current = this.box[id].attributes.fullness.max;
      useFirebaseStore().saveData();
    },
    play(id) {
      if (
        this.box[id].attributes.hygiene.current == 0 ||
        this.box[id].attributes.energy.current == 0
      ) {
        return false;
      }
      this.box[id].attributes.fun.current = Math.min(
        this.box[id].attributes.fun.max,
        this.box[id].attributes.fun.current + 5
      );
      this.box[id].attributes.love.current = Math.min(
        this.box[id].attributes.love.max,
        this.box[id].attributes.love.current + 3
      );
      this.box[id].attributes.hygiene.current = Math.max(
        0,
        this.box[id].attributes.hygiene.current - 1.5
      );
      this.box[id].attributes.energy.current = Math.max(
        0,
        this.box[id].attributes.energy.current - 2.5
      );
      useFirebaseStore().saveData();
    },
    train(id) {
      if (
        this.box[id].attributes.hygiene.current == 0 ||
        this.box[id].attributes.energy.current == 0
      ) {
        return false;
      }
      this.box[id].attributes.fun.current = Math.min(
        this.box[id].attributes.fun.max,
        this.box[id].attributes.fun.current + 10
      );
      this.box[id].attributes.love.current = Math.min(
        this.box[id].attributes.love.max,
        this.box[id].attributes.love.current + 5
      );
      this.box[id].attributes.hygiene.current = Math.max(
        0,
        this.box[id].attributes.hygiene.current - 5
      );
      this.box[id].attributes.energy.current = Math.max(
        0,
        this.box[id].attributes.energy.current - 5
      );
      useFirebaseStore().saveData();
    },
    clean(id) {
      this.box[id].attributes.hygiene.current = this.box[id].attributes.hygiene.max;
      useFirebaseStore().saveData();
    },
    release(id) {
      this.box.splice(id, 1);
      this.clearMon();
      useFirebaseStore().saveData();
    },
    async applyDecs() {
      const decRate = 0.5; // dec per hour
      useFirebaseStore()
        .returnInitTime()
        .then((data) => {
          const timePassed = (Math.floor(Date.now() / 1000) - data.seconds) / 3600;
          const decAmt = decRate * timePassed;
          this.box.forEach((mon) => {
            mon.attributes.fullness.current = Math.max(0, mon.attributes.fullness.current - decAmt);
            mon.attributes.hygiene.current = Math.max(0, mon.attributes.hygiene.current - decAmt);
            mon.attributes.love.current = Math.max(0, mon.attributes.love.current - decAmt);
            mon.attributes.energy.current = Math.min(
              mon.attributes.energy.max,
              mon.attributes.energy.current + 2.5 * timePassed
            );
            mon.attributes.fun.current = Math.max(0, mon.attributes.fun.current - decAmt);
          });
          return true;
        })
        .then((dat) => {
          if (dat) {
            useFirebaseStore().saveTime();
          } else {
            throw new Error();
          }
        });
    },
  },
});
