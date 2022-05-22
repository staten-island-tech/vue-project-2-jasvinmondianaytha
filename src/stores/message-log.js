import { defineStore } from "pinia";

export const useMessageStore = defineStore({
  id: "log",
  state: () => ({
    messages: [],
  }),
  actions: {
    pushMessage(mes) {
      this.messages.unshift({
        time: new Date().toLocaleTimeString(),
        message: mes,
      });
    },
    clearMessages() {
      this.messages = [];
    },
  },
});
