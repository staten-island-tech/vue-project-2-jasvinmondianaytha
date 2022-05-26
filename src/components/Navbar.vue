<template>
  <nav>
    <span>[ </span>
    <span><RouterLink to="/">Home</RouterLink></span>
    <span><span> | </span><RouterLink to="/about">About</RouterLink></span>
    <span v-if="firebaseStore.user"
      ><span> | </span><RouterLink to="/safari">Safari</RouterLink></span
    >
    <span v-if="boxStore.box.length > 0 && firebaseStore.user"
      ><span> | </span><RouterLink to="/box">Box</RouterLink></span
    >
    <span v-if="!firebaseStore.user"
      ><span> | </span><RouterLink to="/login">Log In</RouterLink></span
    >
    <span v-if="!firebaseStore.user"
      ><span> | </span><RouterLink to="/signup">Sign Up</RouterLink></span
    >

    <span v-if="firebaseStore.user"
      ><span> | </span>
      <span class="username"
        >Logged in as {{ this.firebaseStore.user.displayName }}</span
      ></span
    >
    <span v-if="firebaseStore.user"
      ><span> | </span
      ><a class="click" @click="firebaseStore.homeRoute()">Log Out</a></span
    >
    <span> ]</span>
  </nav>
</template>

<script>
import { useFirebaseStore } from "@/stores/firebase-store.js";
import { useBoxStore } from "../stores/box-store";
export default {
  setup() {
    const firebaseStore = useFirebaseStore();
    const boxStore = useBoxStore();
    return { firebaseStore, boxStore };
  },
};
</script>

<style scoped>
nav {
  margin: auto;
  text-align: center;
}
nav * {
  font-size: 1.5rem;
}
a,
a:visited {
  color: inherit;
  text-decoration: none;
}
a:hover,
a:active,
a.router-link-active {
  color: #58a3ff;
}
.click {
  cursor: pointer;
}
</style>
