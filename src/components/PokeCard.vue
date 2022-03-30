<template>
  <div class="pokemon-card">
    <img :src="sprite" class="pokemon-sprite" />
    <p class="pokedex-number">#{{ id }}</p>
    <h1 class="pokemon-name">{{ name }}</h1>
    <h2 class="pokemon-type">{{ type1 }}, {{ type2 }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: Number,
    type1: String,
    type2: String,
    sprite: String,
  },
};
</script>

<style scoped>
.pokemon-card {
  margin: 1rem;
}
.pokemon-sprite {
  size: 100px;
}
</style>
