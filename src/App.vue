<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { useFirebaseStore } from './stores/firebase-store';

export default {
  setup() {
    const store = useFirebaseStore();
    store.fetchUser()
    return {store}
  },
  components: {
    RouterLink, RouterView, Navbar
  }
}
</script>

<template>
<div class="inner-app" v-if="store.authIsReady">
  <header>
    <h1 class="lab-heading">Safari Zone</h1>
    <div class="wrapper">
      <Navbar/>
    </div>
  </header>
  <hr class="break">
  <RouterView class="inner-view"/>
</div>
</template>

<style>
@import '@/assets/base.css';
.lab-heading {
  font-size: 2rem;
  text-align: center;
}
.break {
  margin: 1rem;
  color: #58a3ff;
}
.inner-app {
  background-color: #020827;
  width: 80%;
  margin:auto;
  margin-top: 2rem;
  padding: 1rem;
  border: 0.1rem solid;
  border-color: #58a3ff
}
.inner-view {
  padding: 1rem;
}
</style>
