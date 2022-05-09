<script>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { usePokedexStore } from "@/stores/pokedex.js";

export default {
  setup() {
    const store = usePokedexStore()
    store.fetchAll();
  },
  components: {
    RouterView, Navbar
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
