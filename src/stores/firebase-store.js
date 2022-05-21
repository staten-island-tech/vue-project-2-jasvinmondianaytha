import { defineStore } from "pinia";
import { auth, db } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useBoxStore } from "./box-store";
import { useRouter } from "vue-router";

export const useFirebaseStore = defineStore({
  id: "firebase",
  state: () => ({
    user: null,
    authIsReady: false,
    timeSaved: null,
  }),
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    setAuthIsReady(payload) {
      this.authIsReady = payload;
    },
    async saveData() {
      await setDoc(doc(db, "users", this.user.uid), {
        uid: this.user.uid,
        pokemons: useBoxStore().box,
        timeSaved: serverTimestamp(),
      });
    },
    async loadData() {
      const docRef = doc(db, "users", this.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        useBoxStore().box = docSnap.data().pokemons;
        this.timeSaved = docSnap.data().timeSaved;
      } else {
        console.log("No such document!");
      }
    },
    async signup(email, password, username) {
      const res = await createUserWithEmailAndPassword(auth, email.value, password.value);
      if (res) {
        this.setUser(res.user);
        updateProfile(this.user, { displayName: username.value });
      } else {
        throw new Error("Could not complete signup");
      }
    },
    async login(email, password) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        this.setUser(res.user);
        this.loadData();
      } else {
        throw new Error("Could not complete signup");
      }
    },
    async logout() {
      await signOut(auth);
      this.setUser(null);
    },
    fetchUser() {
      const router = useRouter();
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.setUser(null);
        } else {
          this.setUser(user);
          this.loadData();
          if (
            router.isReady() &&
            (router.currentRoute.value.path === "/login" ||
              router.currentRoute.value.path === "/signup")
          ) {
            router.push("/");
          }
        }
      });
    },
  },
});
