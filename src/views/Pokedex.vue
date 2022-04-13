<template>
  <p v-for="pokemon in store.getGen1" :key="pokemon.name">{{ pokemon.name }}</p>
</template>

<script>
import { usePokedexStore } from "@/stores/pokedex.js";
export default {
  setup() {
    const store = usePokedexStore();
    store.fetchAll();
    return { store };
  },
};
</script>
