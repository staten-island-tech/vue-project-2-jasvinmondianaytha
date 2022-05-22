import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATfRpZ2hHS1ImSN3YhTZmQM2bKFFwObag",
  authDomain: "vuex-firebase-69ca1.firebaseapp.com",
  projectId: "vuex-firebase-69ca1",
  storageBucket: "vuex-firebase-69ca1.appspot.com",
  messagingSenderId: "376047238486",
  appId: "1:376047238486:web:bfc52b90e7953965aeaaf7",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
