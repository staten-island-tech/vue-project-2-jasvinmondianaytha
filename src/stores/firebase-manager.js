import { defineStore } from "pinia";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useFirebaseStore = defineStore({
  id: "firebase",
  state: () => ({
    user: null,
    authIsReady: false,
  }),
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    setAuthIsReady(payload) {
      this.authIsReady = payload;
    },
    async signup(email, password) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        this.setUser(res.user);
      } else {
        throw new Error("Could not complete signup");
      }
    },
    async login(email, password) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        this.setUser(res.user);
      } else {
        throw new Error("Could not complete signup");
      }
    },
    async logout() {
      await signOut(auth);
      this.setUser(null);
    },
  },
});