import { defineStore } from "pinia";

export const useBoxStore = defineStore({
  id: "box",
  state: () => ({
    box: [],
  }),
});
