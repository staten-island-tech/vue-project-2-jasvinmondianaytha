import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase-store";

export const useBoxStore = defineStore({
  id: "box",
  state: () => ({
    box: [],
  }),
  actions: {
    async applyDecs() {
      const decRate = 0.5; // dec per hour
      useFirebaseStore()
        .returnInitTime()
        .then((data) => {
          const timePassed = (Math.floor(Date.now() / 1000) - data.seconds) / 3600;
          const decAmt = decRate * timePassed;
          this.box.forEach((mon) => {
            for (const prop in mon.attributes) {
              mon.attributes[prop].current -= decAmt;
            }
          });
          return true;
        })
        .then((dat) => {
          if (dat) {
            useFirebaseStore().saveData();
          } else {
            throw new Error();
          }
        });
    },
  },
});
