<template>
  <div class="pokemon-card">
    <img :src="sprite" class="pokemon-sprite" />
    <p class="pokedex-number">#{{ dex }}</p>
    <h1 class="pokemon-name">{{ name }}</h1>
    <h2 class="pokemon-type">{{ type }}</h2>
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    name: String,
    id: Number,
    type: String,
    sprite: String,
  },
};
</script>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
}
.pokemon-container {
  display: flex;
}
.poke-media-container img {
  width: 15rem;
}
.desc {
  width: 16rem;
}
</style>
